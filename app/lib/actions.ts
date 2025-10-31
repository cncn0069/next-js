'use server';

export async function createInvoice(formData: FormData) {
    const rawFomrData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
    console.log(rawFomrData)
}