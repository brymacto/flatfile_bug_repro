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
            validators: [
              {
                validate: "required_without_all",
                fields: ["option_m", "option_t"],
              },
            ],
          },
          {
            label: "Option M",
            key: "option_m",
            type: "checkbox",
            validators: [
              {
                validate: "required_without_all",
                fields: ["option_c", "option_t"],
              },
            ],
          },
          {
            label: "Option T",
            key: "option_t",
            type: "checkbox",
            validators: [
              {
                validate: "required_without_all",
                fields: ["option_c", "option_m"],
              },
            ],
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
