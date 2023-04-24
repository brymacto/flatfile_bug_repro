import { FlatfileButton } from "@flatfile/react";

console.log(process.env)
export function App() {
  return <FlatfileButton
  licenseKey={ process.env.FLATFILE_LICENSE_KEY }
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
      { label: "Full Name", key: "name" },
      { label: "Email", key: "email" },
    ],
    managed: true,
  }}
  onData={async (results) => {
    // Do something with the data here
    return "Done!";
  }}>
  Import Contacts
</FlatfileButton>
}
