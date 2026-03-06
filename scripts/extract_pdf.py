import PyPDF2
import sys

pdf_path = sys.argv[1]
output_path = sys.argv[2]

reader = PyPDF2.PdfReader(pdf_path)
text = []
for page in reader.pages:
    text.append(page.extract_text())

with open(output_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(text))

print(f"Extracted text to {output_path}")
