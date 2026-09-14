$totalWords = 0
Get-ChildItem -Path "c:\Users\Logan\projects\Writings\book_1\chapters\*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $words = ($content -split '\s+').Count
    $totalWords += $words
    Write-Host "$($_.Name): $words words"
}
Write-Host "Total Manuscript Words: $totalWords"
