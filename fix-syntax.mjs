import fs from 'fs';

const path = 'src/app/mcqs/[classSlug]/[subjectSlug]/[chapterSlug]/page.tsx';
const content = fs.readFileSync('src/app/mcqs/[classSlug]/[subjectSlug]/[chapterSlug]/page.tsx', 'utf8');

// Fix the fragment syntax issue - replace <> ... </> with <span>
const oldPattern = '<><Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" /> }{isCorrect ? "Correct" : "Incorrect"}</>';
const newText = '<span>{isCorrect ? ( <Check className="h-3.5 w-3.5" /> ) : ( <X className="h-3.5 w-3.5" /> )}{isCorrect ? "Correct" : "Incorrect"}';

const newContent = content.replace(oldPattern, newText);

fs.writeFileSync('src/app/mcqs/[classSlug]/[subjectSlug]/[chapterSlug]/page.tsx', newContent);
console.log('Fixed mcqs page!');
