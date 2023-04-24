import { FlatfileButton } from "@flatfile/react";

export function App() {
  return (
    <FlatfileButton
      licenseKey={process.env.FLATFILE_LICENSE_KEY}
      customer={{
        companyId: "ABC-123",
        companyName: "ABC Corp.",
        email: "john@abc123.com",
        name: "John Smith",
        userId: "12345",
      }}
      settings={{
        type: "Contact",
        fields: [
          {
            label: "Required Column",
            key: "req_column",
            validators: [{ validate: "required" }],
          },
          {
            label: "Optional Column",
            key: "opt_column",
          },
          {
            label: "Option C",
            key: "option_c",
            type: "checkbox",
          },
        ],
        managed: true,
      }}
      onData={async (results) => {
        console.log("Results including valid data", results);
      }}
    >
      Import
    </FlatfileButton>
  );
}
