import { NextResponse } from 'next/server';
import Airtable from 'airtable';

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);

export async function POST(request) {
  try {
    const body = await request.json();
    
    // If this is the first step, create a new record
    if (body.step === 1) {
      const record = await table.create([
        {
          fields: {
            'First Name': body.data.firstName,
            'Last Name': body.data.lastName,
            'Email': body.data.email,
            'Status': 'In progress',
          }
        }
      ]);

      // Return the Airtable record ID as the formId
      return NextResponse.json({ 
        success: true, 
        formId: record[0].getId()
      });
    }
    
    // For subsequent steps, update the existing record
    if (body.formId) {
      let updateFields = {};
      
      // Step 2: Project Type selection
      if (body.step === 2) {
        updateFields = {
          'Service Type': body.data.projectType,
        };
      }
      
      // Step 3: Specific Project selection and completion
      if (body.step === 3) {
        updateFields = {
          'Tag': body.data.specificProject
        };
      }

      // Update the record
      const record = await table.update([
        {
          id: body.formId,
          fields: updateFields,
        }
      ]);

      console.log('Updated Airtable record:', record);
    }

    return NextResponse.json({ 
      success: true, 
      formId: body.formId 
    });
  } catch (error) {
    console.error('Error processing survey submission:', error);
    return NextResponse.json(
      { error: 'Failed to process survey submission' },
      { status: 500 }
    );
  }
} 