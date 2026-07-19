$content = [IO.File]::ReadAllText("src/app/important-questions/[classSlug]/[subjectSlug]/[chapterSlug]/content.tsx")
$oldText = "              <>
                {isCorrect ? <Check className=\"h-3.5 w-3.5\" /> : <X className=\"h-3.5 w-3.5\" />}
                {isCorrect ? 'Correct' : 'Incorrect'}
              </>"
$newText = '<span>{isCorrect ? ( <Check className="h-3.5 w-3.5" /> ) : ( <X className="h-3.5 w-3.5" /> )}{isCorrect ? "Correct" : "Incorrect"}'
$content = $content.Replace($oldText, $newText)
[IO.File]::WriteAllText("src/app/important-questions/[classSlug]/[subjectSlug]/[chapterSlug]/content.tsx", $content)
Write-Host "Fixed content.tsx with exact replace"
