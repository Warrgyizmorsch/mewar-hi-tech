const SCRIPT_OR_CODE_PATTERN =
  /[<>]|\b(?:javascript|vbscript|data)\s*:|\bon(?:click|load|error|mouse\w+|key\w+|focus|blur|submit|change|input)\s*=|\b(?:eval|alert|confirm|prompt|document\.cookie|window\.location)\s*\(|\b[\w-]+\.(?:js|mjs|cjs|jsx|ts|tsx|sh|bash|bat|cmd|ps1|vbs|py|rb|pl|php|exe|dll|msi|html|htm|svg)\b/i;

const SCRIPT_OR_DANGEROUS_EXTENSION_PATTERN =
  /\.(?:js|mjs|cjs|jsx|ts|tsx|sh|bash|bat|cmd|ps1|vbs|py|rb|pl|php|exe|dll|msi|html|htm|svg)\b/i;

const ALLOWED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;
const MAX_RESUME_BYTES = 10 * 1024 * 1024; // 10MB

/**
 * Checks whether user-provided text contains HTML/script tags, inline JS handlers,
 * script protocols, or executable/script file references.
 */
export function containsScriptOrCode(value: string): boolean {
  return SCRIPT_OR_CODE_PATTERN.test(value);
}

/**
 * Shared pattern-based validator for text inputs across forms.
 */
function validateTextWithPattern(
  value: string,
  fieldLabel: string,
  required: boolean,
  pattern: RegExp,
  invalidMessage: string,
  minLength = 1,
  requireAlnum = false
): string | null {
  const trimmed = value.trim();
  if (!trimmed) return required ? `${fieldLabel} is required.` : null;
  if (containsScriptOrCode(trimmed)) {
    return `Script tags, script files, and HTML are not allowed in ${fieldLabel}.`;
  }
  if (
    trimmed.length < minLength ||
    (requireAlnum && !/[A-Za-z0-9]/.test(trimmed)) ||
    !pattern.test(trimmed)
  ) {
    return invalidMessage;
  }
  return null;
}

export function validatePersonName(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "Name is required.";
  if (containsScriptOrCode(trimmed)) {
    return "Script tags, script files, and HTML are not allowed in Name.";
  }
  if (trimmed.length < 2 || !/[A-Za-z]/.test(trimmed) || !/^[A-Za-z\s.'-]+$/.test(trimmed)) {
    return "Name must contain only letters and basic punctuation (no special characters).";
  }
  return null;
}

export function validateEmailAddress(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "Email is required.";
  if (containsScriptOrCode(trimmed)) {
    return "Script tags, script files, and HTML are not allowed in Email.";
  }
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(trimmed)) {
    return "Please enter a valid email address.";
  }
  return null;
}

export function validateMobileNumber(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "Mobile number is required.";
  if (containsScriptOrCode(trimmed)) {
    return "Script tags, script files, and HTML are not allowed in Mobile number.";
  }
  const digits = trimmed.replace(/\D/g, "");
  if (!/^\+?[0-9\s()-]+$/.test(trimmed) || digits.length < 7 || digits.length > 15) {
    return "Please enter a valid mobile number (7 to 15 digits, no special characters).";
  }
  return null;
}

export function validateCompanyName(value: string, required = false): string | null {
  return validateTextWithPattern(
    value,
    "Company Name",
    required,
    /^[A-Za-z0-9\s.,&'()-]+$/,
    "Company Name cannot contain special characters.",
    2,
    true
  );
}

export function validateAddress(value: string, required = true): string | null {
  return validateTextWithPattern(
    value,
    "Delivery / Plant Address",
    required,
    /^[A-Za-z0-9\s.,#/'()-]+$/,
    "Address contains unsupported special characters.",
    3,
    true
  );
}

export function validateExperience(value: string, required = true): string | null {
  return validateTextWithPattern(
    value,
    "Experience & Current Company",
    required,
    /^[A-Za-z0-9\s.,&'+()/-]+$/,
    "Experience cannot contain unsupported special characters.",
    1,
    true
  );
}

export function validateQueryText(
  value: string,
  fieldLabel = "Query",
  required = false
): string | null {
  return validateTextWithPattern(
    value,
    fieldLabel,
    required,
    /^[A-Za-z0-9\s.,?!:()\-/'"]+$/,
    `${fieldLabel} contains unsupported special characters.`
  );
}

export function validateSearchQuery(value: string): string | null {
  return validateTextWithPattern(
    value,
    "Search query",
    false,
    /^[A-Za-z0-9\s.,&'()/-]+$/,
    "Special characters, HTML tags, and script inputs are not allowed in Search."
  );
}

export function validateResumeFile(
  file: { name?: string; size?: number } | null | undefined
): string | null {
  if (!file || !file.name) {
    return "Please attach your resume (PDF, DOC, or DOCX).";
  }
  const filename = file.name.trim();
  if (
    containsScriptOrCode(filename) ||
    SCRIPT_OR_DANGEROUS_EXTENSION_PATTERN.test(filename)
  ) {
    return "Script or executable files are not allowed. Upload PDF, DOC, or DOCX only.";
  }
  const lower = filename.toLowerCase();
  const hasAllowedExt = ALLOWED_RESUME_EXTENSIONS.some((ext) => lower.endsWith(ext));
  if (!hasAllowedExt) {
    return "Invalid file type. Only PDF, DOC, and DOCX files are allowed.";
  }
  if (typeof file.size === "number" && file.size > MAX_RESUME_BYTES) {
    return "Resume file size must be 10MB or less.";
  }
  return null;
}

/**
 * Validates all fields in an object against a validator map.
 */
export function validateFields<T extends object>(
  data: T,
  validators: Partial<Record<keyof T, (value: string) => string | null>>
): Partial<Record<keyof T, string>> {
  const errors: Partial<Record<keyof T, string>> = {};
  (Object.keys(validators) as Array<keyof T>).forEach((key) => {
    const validator = validators[key];
    if (!validator) return;
    const rawValue = data[key];
    const err = validator(typeof rawValue === "string" ? rawValue : "");
    if (err) errors[key] = err;
  });
  return errors;
}

export function inputBorderClass(
  hasError?: string,
  defaultClass = "border-border focus:border-primary"
): string {
  return hasError ? "border-red-500 focus:border-red-500" : defaultClass;
}

export interface BrochureFormInput {
  name: string;
  email: string;
  mobile: string;
  company: string;
  productName: string;
  query: string;
}

export type BrochureFormErrors = Partial<Record<keyof BrochureFormInput, string>>;

/**
 * Validates all fields of the brochure enquiry form, enforcing mandatory company
 * name and query while blocking special characters and script payloads.
 */
export function validateBrochureForm(data: BrochureFormInput): BrochureFormErrors {
  const errors: BrochureFormErrors = validateFields(data, {
    name: validatePersonName,
    email: validateEmailAddress,
    mobile: validateMobileNumber,
    company: (val) => validateCompanyName(val, true),
    query: (val) => validateQueryText(val, "Query", true),
  });

  if (!data.productName || containsScriptOrCode(data.productName)) {
    errors.productName = "Please select a valid brochure option.";
  }

  return errors;
}
