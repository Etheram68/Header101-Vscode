
const hashes = ['# ', ' #']
const slashes = ['/* ', ' */']
const semicolons = [';; ', ' ;;']
const parens = ['(* ', ' *)']
const dashes = ['-- ', ' --']
const chevrons = ['<!--', ' -->']
const percents = ['%% ', ' %%']

export const languageDemiliters: { [lang: string]: string[] | undefined } = {
  'c': slashes,
  'asm': semicolons,
  'coffeescript': hashes,
  'cpp': slashes,
  'csharp' : slashes,
  'css': slashes,
  'dockerfile': hashes,
  'fsharp': parens,
  'go': slashes,
  'groovy': slashes,
  'haskell': dashes,
  'ini': semicolons,
  'jade': slashes,
  'java': slashes,
  'javascript': slashes,
  'javascriptreact': slashes,
  'latex': percents,
  'less': slashes,
  'lua': dashes,
  'makefile': hashes,
  'objective-c': slashes,
  'ocaml': parens,
  'perl': hashes,
  'perl6': hashes,
  'php': hashes,
  'html': chevrons,
  'plaintext': hashes,
  'powershell': hashes,
  'python': hashes,
  'r': hashes,
  'ruby': hashes,
  'rust': slashes,
  'scss': slashes,
  'shellscript': hashes,
  'sql': hashes,
  'swift': slashes,
  'typescript': slashes,
  'typescriptreact': slashes,
  'xsl': slashes,
  'yaml': hashes,
}
