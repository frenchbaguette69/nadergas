// lib/email-templates/signed-quote.ts
interface SignedQuoteEmailProps {
	name: string;
	quoteId: string;
	service: string;
	total: number;
}

export function getSignedEmailTemplate({ name, quoteId, service, total }: SignedQuoteEmailProps): string {
	return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; font-size: 24px; margin: 0;">
            Quote Signed Successfully
          </h1>
        </div>

        <div style="margin-bottom: 20px;">
          <p style="color: #34495e; line-height: 1.6;">
            Dear ${name},
          </p>
          <p style="color: #34495e; line-height: 1.6;">
            Thank you for signing the quote. Your signed document is attached to this email.
          </p>
        </div>

        <div style="background-color: #f9f9f9; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
          <div style="margin-bottom: 10px;">
            <span style="font-weight: bold; color: #2c3e50;">Quote ID:</span>
            <span style="color: #7f8c8d;">${quoteId}</span>
          </div>
          <div style="margin-bottom: 10px;">
            <span style="font-weight: bold; color: #2c3e50;">Service:</span>
            <span style="color: #7f8c8d;">${service}</span>
          </div>
          <div style="margin-bottom: 10px;">
            <span style="font-weight: bold; color: #2c3e50;">Total:</span>
            <span style="color: #27ae60;">€${total.toFixed(2)}</span>
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
          <p style="color: #7f8c8d; font-size: 14px; text-align: center;">
            © 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  `;
}
