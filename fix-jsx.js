const fs = require('fs');
const path = 'src/app/mcqs/[classSlug]/[subjectSlug]/[chapterSlug]/page.tsx';
const content = fs.readFileSync(path, 'utf8');

// Fix the fragment syntax issue - replace <> ... </> with <span>
const newContent = content.replace(
  /\{isCorrect !== undefined && \([\s\S]*?<>\s*\{isCorrect \? <Check className="h-3\.5 w-3\.5" \/> : <X className="h-3\.5 w-3\.5" \/> \}\s*\{isCorrect \? 'Correct' : 'Incorrect'\}\s*<\/>\s*<\/span>\s*\)\}/g,
  {isCorrect !== undefined && (
            <span className={\inline-flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-medium \\}>
              <span>
                {isCorrect ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                {isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            </span>
          )}
);

fs.writeFileSync('src/app/mcqs/[classSlug]/[subjectSlug]/[chapterSlug]/page.tsx', newContent);
console.log('Fixed mcqs page!');
