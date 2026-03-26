import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>Your verification code: {otp}</Preview>

      <Section
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Header */}
        <Row
          style={{
            backgroundColor: "#4F46E5",
            padding: "24px 32px",
            textAlign: "center",
          }}
        >
          <Heading
            as="h1"
            style={{ color: "#ffffff", fontSize: "28px", margin: 0 }}
          >
            MyApp
          </Heading>
        </Row>

        {/* Body */}
        <Row style={{ padding: "32px", backgroundColor: "#f9fafb" }}>
          <Heading as="h2" style={{ fontSize: "22px", color: "#111827" }}>
            Hi, {username} 👋
          </Heading>

          <Text
            style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.6" }}
          >
            Thank you for signing up! Use the verification code below to confirm
            your email address. This code is valid for{" "}
            <strong>10 minutes</strong>.
          </Text>

          {/* OTP Box */}
          <Section
            style={{
              backgroundColor: "#EEF2FF",
              border: "1px dashed #4F46E5",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#4F46E5",
                letterSpacing: "8px",
                margin: 0,
              }}
            >
              {otp}
            </Text>
          </Section>

          <Text
            style={{
              fontSize: "15px",
              color: "#4B5563",
              lineHeight: "1.6",
              marginTop: "20px",
            }}
          >
            If you did not request this code, you can safely ignore this email.
          </Text>

          <Button
            href="https://yourapp.com/verify"
            style={{
              backgroundColor: "#4F46E5",
              color: "#ffffff",
              padding: "12px 32px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            Verify Email
          </Button>
        </Row>

        {/* Footer */}
        <Row
          style={{
            backgroundColor: "#F3F4F6",
            padding: "20px 32px",
            textAlign: "center",
          }}
        >
          <Text style={{ fontSize: "12px", color: "#9CA3AF", margin: "4px 0" }}>
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
