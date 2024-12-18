import { TQuote } from "@/types";

export function getQuoteEmailTemplate(quote: TQuote): string {
	return `
    <div
      style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f4f4f4;
      "
    >
      <div
        style="
          background-color: white;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        "
      >
        <div
          style="
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 20px;
          "
        >
          <h1
            style="
              color: #2c3e50;
              font-size: 24px;
              margin: 0;
            "
          >
            Your Quotation is Ready
          </h1>
        </div>

        <div style="margin-bottom: 20px;">
          <p
            style="
              color: #34495e;
              line-height: 1.6;
              font-size: 16px;
            "
          >
            Dear ${quote.name},
          </p>
          <p
            style="
              color: #34495e;
              line-height: 1.6;
              font-size: 16px;
            "
          >
            We are pleased to provide you with a detailed quotation for the service you requested. Please find the quote details below:
          </p>
        </div>

        <div
          style="
            background-color: #f9f9f9;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 20px;
          "
        >
          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
            "
          >
            <span style="font-weight: bold; color: #2c3e50;">Quote ID:</span>
            <span style="color: #7f8c8d;">${quote.id}</span>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
            "
          >
            <span style="font-weight: bold; color: #2c3e50;">Service:</span>
            <span style="color: #7f8c8d;">${quote.service.title}</span>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
            "
          >
            <span style="font-weight: bold; color: #2c3e50;">Area:</span>
            <span style="color: #7f8c8d;">${quote.area} sq.m</span>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
              padding-top: 10px;
              border-top: 1px solid #e0e0e0;
            "
          >
            <span
              style="
                font-weight: bold;
                color: #2c3e50;
                font-size: 18px;
              "
            >
              Total:
            </span>
            <span
              style="
                font-weight: bold;
                color: #27ae60;
                font-size: 18px;
              "
            >
              €${quote.total.toFixed(2)}
            </span>
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <p
            style="
              color: #34495e;
              line-height: 1.6;
              font-size: 16px;
            "
          >
            The attached PDF contains full details of the quotation. Please review and contact us if you have any questions.
          </p>
        </div>

        <div
          style="
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
          "
        >
          <p
            style="
              color: #7f8c8d;
              font-size: 14px;
              margin: 0;
            "
          >
            © 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  `;
}
