import React from "react";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createPropertyAction } from "@/utils/actions";
import SubmitButton from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/CategoriesInput";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
        Create Property
      </h1>
      <div className='border p-8 rounded'>
        <h3 className='text-lg mb-4 font-medium'>General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='name'
              type='text'
              label='Name (20 limit)'
              defaultValue='Wooden Shack'
            />
            <FormInput
              name='tagine'
              type='text'
              label='Tagline (30 limit)'
              defaultValue='Your dream getaway awaits you...'
            />
            {/* price */}
            <PriceInput />
            {/* categories */}
            <CategoriesInput />
          </div>
          {/* text area/ description input */}
          <SubmitButton text='Create Rental' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;