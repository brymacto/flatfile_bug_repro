# Flatfile bug reproduction

This repo is designed to reproduce a bug related to validations.

Summary of the bug: with this configuration and file, rows that are not meeting the specified validations are being submitted even though they should be discarded.

The conditions to produce the bug appear to be to have a column that is unmapped, as well as a checkbox column.

## Getting set up
- Copy `.env.sample` to `.env` and insert your flatfile license key
- `yarn run start` to start server


## Steps to reproduce
- Upload the `file_for_upload.csv` to the uploader
- Match the columns. First column leave unmapped.
- Review the data. Note that one invalid row has been highlighted due to an invalid 'Required column' value.
- Click continue and submit the data. When prompted, select 'Discard 1 row with issues. Submit the rest.'
- Note that the data is not being submitted to a server, but the result is being logged to the console. Review the result.

## Expected behavior
- 5 valid rows should be submitted

## Actual behavior
- 17 rows are submitted, 12 of which include `undefined` values for the required column. Only 1 of the 18 rows has been discarded.

## Screenshots

<img width="1486" alt="Screenshot 2023-04-23 at 10 16 48 PM" src="https://user-images.githubusercontent.com/10377354/233885070-42cda7c2-3a44-4c12-89b4-00ac2fea7774.png">
<img width="499" alt="Screenshot 2023-04-23 at 10 16 53 PM" src="https://user-images.githubusercontent.com/10377354/233885085-5b855e11-73c8-4793-b8f9-bfa0649e987b.png">
