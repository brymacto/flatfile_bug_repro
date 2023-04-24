# Flatfile bug reproduction

This repo is designed to reproduce a bug related to validations.

Summary of the bug: with this configuration and file, rows that are not meeting the specified validations are being submitted even though they should be discarded.

## Getting set up
- Copy `.env.sample` to `.env` and insert your flatfile license key
- `yarn run start` to start server


## Steps to reproduce
- Upload the `file_for_upload.xlsx` to the uploader
- Match the columns. First column leave unmapped.
- Review the data. Note that one invalid row has been highlighted due to an invalid 'Required column' value.
- Click continue and submit the data. When prompted, select 'Discard 1 row with issues. Submit the rest.'
- Note that the data is not being submitted to a server, but the result is being logged to the console. Review the result.

## Expected behavior
- 6 valid rows should be submitted

## Actual behavior
- 17 rows are submitted, 12 of which include `undefined` values for the required column
