export interface Question {
  id: string;
  questionNumber: number;
  title: string;
  content: string;
  solution: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

/**
 * QUESTION DATA
 * ============
 * This file contains NCERT exercise questions and verified solutions.
 *
 * FORMAT:
 *   Key: `${classSlug}-${subjectSlug}-${chapterSlug}-${exerciseSlug}`
 *   Value: Array of Question objects
 *
 * To add data for an exercise, create an entry like:
 *   'class-10-mathematics-real-numbers-exercise-1-1': [
 *     {
 *       id: 'q10m-1-1-1',
 *       questionNumber: 1,
 *       title: 'Question 1',
 *       content: '... question text ...',
 *       solution: '... step-by-step solution ...',
 *       difficulty: 'easy' | 'medium' | 'hard',
 *       tags: ['tag1', 'tag2'],
 *     },
 *   ],
 *
 * Current Status:
 *   - Real NCERT data exists for: (none yet — all exercises show "Coming Soon")
 *   - To contribute: add entries following the format above
 *
 * The page components already handle empty question arrays gracefully
 * by displaying a "Coming Soon" state with relevant information.
 */

export const questionData: Record<string, Question[]> = {
  // ====================================================================
  // CLASS 10 MATHEMATICS
  // ====================================================================

  // ----- Chapter 1: Real Numbers -----
  'class-10-mathematics-real-numbers-exercise-1-1': [
    {
      id: 'q10m-1-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Use Euclid\'s division algorithm to find the HCF of:\n(i) 135 and 225\n(ii) 196 and 38220\n(iii) 867 and 255',
      solution: '(i) 135 and 225\nStep 1: 225 = 135 × 1 + 90\nStep 2: 135 = 90 × 1 + 45\nStep 3: 90 = 45 × 2 + 0\nHCF = 45\n\n(ii) 196 and 38220\nStep 1: 38220 = 196 × 195 + 0\nHCF = 196\n\n(iii) 867 and 255\nStep 1: 867 = 255 × 3 + 102\nStep 2: 255 = 102 × 2 + 51\nStep 3: 102 = 51 × 2 + 0\nHCF = 51',
      difficulty: 'medium',
      tags: ['euclid-algorithm', 'hcf', 'real-numbers'],
    },
    {
      id: 'q10m-1-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Show that any positive odd integer is of the form 6q + 1, or 6q + 3, or 6q + 5, where q is some integer.',
      solution: 'Step 1: Let a be any positive integer and b = 6.\nStep 2: By Euclid\'s division lemma, a = 6q + r, where 0 ≤ r < 6.\nStep 3: So r = 0, 1, 2, 3, 4, or 5.\nStep 4: Therefore, a = 6q, 6q + 1, 6q + 2, 6q + 3, 6q + 4, or 6q + 5.\nStep 5: a is odd, so a cannot be 6q, 6q + 2, or 6q + 4 (these are even).\nStep 6: Thus, any positive odd integer is of the form 6q + 1, 6q + 3, or 6q + 5.',
      difficulty: 'medium',
      tags: ['euclid-lemma', 'odd-integers', 'proof'],
    },
    {
      id: 'q10m-1-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'An army contingent of 616 members is to march behind an army band of 32 members in a parade. The two groups are to march in the same number of columns. What is the maximum number of columns in which they can march?',
      solution: 'Step 1: We need to find HCF(616, 32).\nStep 2: 616 = 32 × 19 + 8\nStep 3: 32 = 8 × 4 + 0\nStep 4: HCF = 8\nTherefore, the maximum number of columns is 8.',
      difficulty: 'easy',
      tags: ['hcf', 'euclid-algorithm', 'real-life'],
    },
    {
      id: 'q10m-1-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Use Euclid\'s division lemma to show that the square of any positive integer is either of the form 3m or 3m + 1 for some integer m.',
      solution: 'Step 1: Let a be any positive integer. By Euclid\'s lemma, a = 3q + r, r = 0, 1, 2.\nStep 2: So a = 3q, 3q + 1, or 3q + 2.\nStep 3: Square each case:\nCase 1: a = 3q → a² = 9q² = 3(3q²) = 3m\nCase 2: a = 3q + 1 → a² = 9q² + 6q + 1 = 3(3q² + 2q) + 1 = 3m + 1\nCase 3: a = 3q + 2 → a² = 9q² + 12q + 4 = 9q² + 12q + 3 + 1 = 3(3q² + 4q + 1) + 1 = 3m + 1\nThus, the square of any positive integer is of the form 3m or 3m + 1.',
      difficulty: 'hard',
      tags: ['euclid-lemma', 'squares', 'proof'],
    },
    {
      id: 'q10m-1-1-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'Use Euclid\'s division lemma to show that the cube of any positive integer is of the form 9m, 9m + 1 or 9m + 8.',
      solution: 'Step 1: Let a be any positive integer. By Euclid\'s lemma, a = 3q + r, r = 0, 1, 2.\nStep 2: So a = 3q, 3q + 1, or 3q + 2.\nStep 3: Cube each case:\nCase 1: a = 3q → a³ = 27q³ = 9(3q³) = 9m\nCase 2: a = 3q + 1 → a³ = 27q³ + 27q² + 9q + 1 = 9(3q³ + 3q² + q) + 1 = 9m + 1\nCase 3: a = 3q + 2 → a³ = 27q³ + 54q² + 36q + 8 = 9(3q³ + 6q² + 4q) + 8 = 9m + 8\nThus, the cube of any positive integer is of the form 9m, 9m + 1 or 9m + 8.',
      difficulty: 'hard',
      tags: ['euclid-lemma', 'cubes', 'proof'],
    },
  ],

  'class-10-mathematics-real-numbers-exercise-1-2': [
    {
      id: 'q10m-1-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Express each number as a product of its prime factors:\n(i) 140\n(ii) 156\n(iii) 3825\n(iv) 5005\n(v) 7429',
      solution: '(i) 140 = 2 × 2 × 5 × 7 = 2² × 5 × 7\n(ii) 156 = 2 × 2 × 3 × 13 = 2² × 3 × 13\n(iii) 3825 = 3 × 3 × 5 × 5 × 17 = 3² × 5² × 17\n(iv) 5005 = 5 × 7 × 11 × 13\n(v) 7429 = 17 × 19 × 23',
      difficulty: 'easy',
      tags: ['prime-factorisation', 'real-numbers'],
    },
    {
      id: 'q10m-1-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find the LCM and HCF of the following pairs of integers and verify that LCM × HCF = product of the two numbers:\n(i) 26 and 91\n(ii) 510 and 92\n(iii) 336 and 54',
      solution: '(i) 26 = 2 × 13, 91 = 7 × 13\nHCF = 13, LCM = 2 × 7 × 13 = 182\nVerification: LCM × HCF = 182 × 13 = 2366\nProduct: 26 × 91 = 2366 ✓\n\n(ii) 510 = 2 × 3 × 5 × 17, 92 = 2² × 23\nHCF = 2, LCM = 2² × 3 × 5 × 17 × 23 = 23460\nVerification: LCM × HCF = 23460 × 2 = 46920\nProduct: 510 × 92 = 46920 ✓\n\n(iii) 336 = 2⁴ × 3 × 7, 54 = 2 × 3³\nHCF = 2 × 3 = 6, LCM = 2⁴ × 3³ × 7 = 3024\nVerification: LCM × HCF = 3024 × 6 = 18144\nProduct: 336 × 54 = 18144 ✓',
      difficulty: 'medium',
      tags: ['hcf', 'lcm', 'prime-factorisation', 'verification'],
    },
    {
      id: 'q10m-1-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Find the LCM and HCF of the following integers by applying the prime factorisation method:\n(i) 12, 15 and 21\n(ii) 17, 23 and 29\n(iii) 8, 9 and 25',
      solution: '(i) 12 = 2² × 3, 15 = 3 × 5, 21 = 3 × 7\nHCF = 3, LCM = 2² × 3 × 5 × 7 = 420\n\n(ii) 17, 23, 29 are all prime numbers\nHCF = 1, LCM = 17 × 23 × 29 = 11339\n\n(iii) 8 = 2³, 9 = 3², 25 = 5²\nHCF = 1 (no common prime factors)\nLCM = 2³ × 3² × 5² = 8 × 9 × 25 = 1800',
      difficulty: 'medium',
      tags: ['hcf', 'lcm', 'prime-factorisation'],
    },
    {
      id: 'q10m-1-2-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Given that HCF(306, 657) = 9, find LCM(306, 657).',
      solution: 'Step 1: We know LCM × HCF = Product of numbers\nStep 2: LCM × 9 = 306 × 657\nStep 3: LCM = (306 × 657) / 9\nStep 4: LCM = 306 × 73 = 22338\nTherefore, LCM(306, 657) = 22338.',
      difficulty: 'easy',
      tags: ['lcm', 'hcf', 'relationship'],
    },
    {
      id: 'q10m-1-2-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'Check whether 6ⁿ can end with the digit 0 for any natural number n.',
      solution: "Step 1: If 6ⁿ ends with 0, then it must be divisible by 5.\nStep 2: 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ\nStep 3: Prime factors of 6ⁿ are only 2 and 3.\nStep 4: For a number to end with 0, it must have 5 as a prime factor.\nSince 6ⁿ has no factor 5, it cannot end with 0 for any natural number n.",
      difficulty: 'medium',
      tags: ['prime-factors', 'divisibility', 'proof'],
    },
    {
      id: 'q10m-1-2-6',
      questionNumber: 6,
      title: 'Question 6',
      content: 'Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.',
      solution: 'First number: 7 × 11 × 13 + 13\nStep 1: = 13(7 × 11 + 1) = 13(77 + 1) = 13 × 78\nStep 2: 78 = 2 × 3 × 13\nStep 3: So the number = 13 × 2 × 3 × 13 = 2 × 3 × 13²\nSince it has factors other than 1 and itself, it is composite.\n\nSecond number: 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5\nStep 1: = 5(7 × 6 × 4 × 3 × 2 × 1 + 1) = 5(1008 + 1) = 5 × 1009\nSince it has factors 5 and 1009, it is composite.',
      difficulty: 'medium',
      tags: ['composite-numbers', 'prime-factors'],
    },
    {
      id: 'q10m-1-2-7',
      questionNumber: 7,
      title: 'Question 7',
      content: 'There is a circular path around a sports field. Sonia takes 18 minutes to drive one round of the field, while Ravi takes 12 minutes for the same. Suppose they both start at the same point and at the same time and go in the same direction. After how many minutes will they meet again at the starting point?',
      solution: 'Step 1: Time taken by Sonia = 18 min, Ravi = 12 min.\nStep 2: They will meet at the starting point after LCM(18, 12) minutes.\nStep 3: 18 = 2 × 3², 12 = 2² × 3\nStep 4: LCM = 2² × 3² = 4 × 9 = 36\nTherefore, they will meet again at the starting point after 36 minutes.',
      difficulty: 'easy',
      tags: ['lcm', 'real-life', 'circular-motion'],
    },
  ],

  'class-10-mathematics-real-numbers-exercise-1-3': [
    {
      id: 'q10m-1-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Prove that √5 is irrational.',
      solution: "Step 1: Assume √5 is rational. Then √5 = a/b, where a, b are co-prime integers, b ≠ 0.\nStep 2: Squaring: 5 = a²/b² → a² = 5b²\nStep 3: So 5 divides a², hence 5 divides a.\nStep 4: Let a = 5c. Then a² = 25c².\nStep 5: Substituting: 25c² = 5b² → 5c² = b²\nStep 6: So 5 divides b², hence 5 divides b.\nStep 7: This contradicts that a and b are co-prime (both have factor 5).\nTherefore, √5 is irrational.",
      difficulty: 'hard',
      tags: ['irrational-numbers', 'proof-by-contradiction', 'square-roots'],
    },
    {
      id: 'q10m-1-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Prove that 3 + 2√5 is irrational.',
      solution: "Step 1: Assume 3 + 2√5 is rational. Let 3 + 2√5 = a/b, where a, b are integers, b ≠ 0.\nStep 2: Then 2√5 = a/b - 3 = (a - 3b)/b\nStep 3: √5 = (a - 3b)/(2b)\nStep 4: Since a, b are integers, (a - 3b)/(2b) is rational.\nStep 5: This implies √5 is rational, which contradicts that √5 is irrational.\nTherefore, 3 + 2√5 is irrational.",
      difficulty: 'hard',
      tags: ['irrational-numbers', 'proof-by-contradiction'],
    },
    {
      id: 'q10m-1-3-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Prove that the following are irrationals:\n(i) 1/√2\n(ii) 7√5\n(iii) 6 + √2',
      solution: "(i) 1/√2\nStep 1: Assume 1/√2 is rational. Let 1/√2 = a/b, where a, b are co-prime, b ≠ 0.\nStep 2: Then √2 = b/a, which would be rational.\nStep 3: But √2 is irrational (contradiction).\nTherefore, 1/√2 is irrational.\n\n(ii) 7√5\nStep 1: Assume 7√5 is rational. Let 7√5 = a/b, where a, b are co-prime, b ≠ 0.\nStep 2: Then √5 = a/(7b), which would be rational.\nStep 3: But √5 is irrational (contradiction).\nTherefore, 7√5 is irrational.\n\n(iii) 6 + √2\nStep 1: Assume 6 + √2 is rational. Let 6 + √2 = a/b, where a, b are integers, b ≠ 0.\nStep 2: Then √2 = a/b - 6 = (a - 6b)/b, which would be rational.\nStep 3: But √2 is irrational (contradiction).\nTherefore, 6 + √2 is irrational.",
      difficulty: 'hard',
      tags: ['irrational-numbers', 'proof-by-contradiction'],
    },
  ],

  // ----- Chapter 2: Polynomials -----
  'class-10-mathematics-polynomials-exercise-2-1': [
    {
      id: 'q10m-2-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'The graphs of y = p(x) are given in Fig. 2.10 below, for some polynomials p(x). Find the number of zeroes of p(x), in each case.\n\n[Note: In the actual NCERT textbook, there are 6 graphs shown:\n(i) Graph does not intersect x-axis — 0 zeroes\n(ii) Graph intersects x-axis at 1 point — 1 zero\n(iii) Graph intersects x-axis at 3 points — 3 zeroes\n(iv) Graph intersects x-axis at 2 points — 2 zeroes\n(v) Graph intersects x-axis at 4 points — 4 zeroes\n(vi) Graph intersects x-axis at 3 points — 3 zeroes]',
      solution: 'The number of zeroes of a polynomial p(x) is equal to the number of times its graph intersects the x-axis.\n\n(i) The graph does not intersect the x-axis → 0 zeroes\n(ii) The graph intersects at 1 point → 1 zero\n(iii) The graph intersects at 3 points → 3 zeroes\n(iv) The graph intersects at 2 points → 2 zeroes\n(v) The graph intersects at 4 points → 4 zeroes\n(vi) The graph intersects at 3 points → 3 zeroes',
      difficulty: 'easy',
      tags: ['polynomials', 'zeroes', 'graphs'],
    },
  ],

  'class-10-mathematics-polynomials-exercise-2-2': [
    {
      id: 'q10m-2-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients:\n(i) x² - 2x - 8\n(ii) 4s² - 4s + 1\n(iii) 6x² - 3 - 7x\n(iv) 4u² + 8u\n(v) t² - 15\n(vi) 3x² - x - 4',
      solution: '(i) x² - 2x - 8 = (x - 4)(x + 2)\nZeroes: x = 4, x = -2\nSum = 4 + (-2) = 2 = -(-2)/1 = -b/a ✓\nProduct = 4 × (-2) = -8 = -8/1 = c/a ✓\n\n(ii) 4s² - 4s + 1 = (2s - 1)²\nZeroes: s = 1/2, 1/2\nSum = 1/2 + 1/2 = 1 = -(-4)/4 = -b/a ✓\nProduct = 1/2 × 1/2 = 1/4 = 1/4 = c/a ✓\n\n(iii) 6x² - 7x - 3 = (2x - 3)(3x + 1)\nZeroes: x = 3/2, x = -1/3\nSum = 3/2 + (-1/3) = 7/6 = -(-7)/6 = -b/a ✓\nProduct = 3/2 × (-1/3) = -1/2 = -3/6 = c/a ✓\n\n(iv) 4u² + 8u = 4u(u + 2)\nZeroes: u = 0, u = -2\nSum = 0 + (-2) = -2 = -8/4 = -b/a ✓\nProduct = 0 × (-2) = 0 = 0/4 = c/a ✓\n\n(v) t² - 15 = (t - √15)(t + √15)\nZeroes: t = √15, t = -√15\nSum = √15 + (-√15) = 0 = -0/1 = -b/a ✓\nProduct = √15 × (-√15) = -15 = -15/1 = c/a ✓\n\n(vi) 3x² - x - 4 = (3x - 4)(x + 1)\nZeroes: x = 4/3, x = -1\nSum = 4/3 + (-1) = 1/3 = -(-1)/3 = -b/a ✓\nProduct = 4/3 × (-1) = -4/3 = -4/3 = c/a ✓',
      difficulty: 'medium',
      tags: ['polynomials', 'zeroes', 'quadratic', 'verification'],
    },
    {
      id: 'q10m-2-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively:\n(i) 1/4, -1\n(ii) √2, 1/3\n(iii) 0, √5\n(iv) 1, 1\n(v) -1/4, 1/4\n(vi) 4, 1',
      solution: 'A quadratic polynomial with sum S and product P is given by: k(x² - Sx + P)\n\n(i) S = 1/4, P = -1\nPolynomial: k(x² - x/4 - 1) = k(4x² - x - 4)/4\nTaking k = 4: 4x² - x - 4\n\n(ii) S = √2, P = 1/3\nPolynomial: k(x² - √2x + 1/3) = k(3x² - 3√2x + 1)/3\nTaking k = 3: 3x² - 3√2x + 1\n\n(iii) S = 0, P = √5\nPolynomial: k(x² - 0x + √5) = k(x² + √5)\nTaking k = 1: x² + √5\n\n(iv) S = 1, P = 1\nPolynomial: k(x² - x + 1)\nTaking k = 1: x² - x + 1\n\n(v) S = -1/4, P = 1/4\nPolynomial: k(x² + x/4 + 1/4) = k(4x² + x + 1)/4\nTaking k = 4: 4x² + x + 1\n\n(vi) S = 4, P = 1\nPolynomial: k(x² - 4x + 1)\nTaking k = 1: x² - 4x + 1',
      difficulty: 'medium',
      tags: ['polynomials', 'quadratic', 'sum-product-of-zeroes'],
    },
  ],
};
  // ====================================================================
  // CLASS 10 MATHEMATICS
  // ====================================================================

  // ----- Chapter 1: Real Numbers -----
  'class-10-mathematics-real-numbers-exercise-1-1': [
    {
      id: 'q10m-1-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Use Euclid\'s division algorithm to find the HCF of:\n(i) 135 and 225\n(ii) 196 and 38220\n(iii) 867 and 255',
      solution: '(i) 135 and 225\nStep 1: 225 = 135 × 1 + 90\nStep 2: 135 = 90 × 1 + 45\nStep 3: 90 = 45 × 2 + 0\nHCF = 45\n\n(ii) 196 and 38220\nStep 1: 38220 = 196 × 195 + 0\nHCF = 196\n\n(iii) 867 and 255\nStep 1: 867 = 255 × 3 + 102\nStep 2: 255 = 102 × 2 + 51\nStep 3: 102 = 51 × 2 + 0\nHCF = 51',
      difficulty: 'medium',
      tags: ['euclid-algorithm', 'hcf', 'real-numbers'],
    },
    {
      id: 'q10m-1-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Show that any positive odd integer is of the form 6q + 1, or 6q + 3, or 6q + 5, where q is some integer.',
      solution: 'Step 1: Let a be any positive integer and b = 6.\nStep 2: By Euclid\'s division lemma, a = 6q + r, where 0 ≤ r < 6.\nStep 3: So r = 0, 1, 2, 3, 4, or 5.\nStep 4: Therefore, a = 6q, 6q + 1, 6q + 2, 6q + 3, 6q + 4, or 6q + 5.\nStep 5: a is odd, so a cannot be 6q, 6q + 2, or 6q + 4 (these are even).\nStep 6: Thus, any positive odd integer is of the form 6q + 1, 6q + 3, or 6q + 5.',
      difficulty: 'medium',
      tags: ['euclid-lemma', 'odd-integers', 'proof'],
    },
    {
      id: 'q10m-1-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'An army contingent of 616 members is to march behind an army band of 32 members in a parade. The two groups are to march in the same number of columns. What is the maximum number of columns in which they can march?',
      solution: 'Step 1: We need to find HCF(616, 32).\nStep 2: 616 = 32 × 19 + 8\nStep 3: 32 = 8 × 4 + 0\nStep 4: HCF = 8\nTherefore, the maximum number of columns is 8.',
      difficulty: 'easy',
      tags: ['hcf', 'euclid-algorithm', 'real-life'],
    },
    {
      id: 'q10m-1-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Use Euclid\'s division lemma to show that the square of any positive integer is either of the form 3m or 3m + 1 for some integer m.',
      solution: 'Step 1: Let a be any positive integer. By Euclid\'s lemma, a = 3q + r, r = 0, 1, 2.\nStep 2: So a = 3q, 3q + 1, or 3q + 2.\nStep 3: Square each case:\nCase 1: a = 3q → a² = 9q² = 3(3q²) = 3m\nCase 2: a = 3q + 1 → a² = 9q² + 6q + 1 = 3(3q² + 2q) + 1 = 3m + 1\nCase 3: a = 3q + 2 → a² = 9q² + 12q + 4 = 9q² + 12q + 3 + 1 = 3(3q² + 4q + 1) + 1 = 3m + 1\nThus, the square of any positive integer is of the form 3m or 3m + 1.',
      difficulty: 'hard',
      tags: ['euclid-lemma', 'squares', 'proof'],
    },
    {
      id: 'q10m-1-1-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'Use Euclid\'s division lemma to show that the cube of any positive integer is of the form 9m, 9m + 1 or 9m + 8.',
      solution: 'Step 1: Let a be any positive integer. By Euclid\'s lemma, a = 3q + r, r = 0, 1, 2.\nStep 2: So a = 3q, 3q + 1, or 3q + 2.\nStep 3: Cube each case:\nCase 1: a = 3q → a³ = 27q³ = 9(3q³) = 9m\nCase 2: a = 3q + 1 → a³ = 27q³ + 27q² + 9q + 1 = 9(3q³ + 3q² + q) + 1 = 9m + 1\nCase 3: a = 3q + 2 → a³ = 27q³ + 54q² + 36q + 8 = 9(3q³ + 6q² + 4q) + 8 = 9m + 8\nThus, the cube of any positive integer is of the form 9m, 9m + 1 or 9m + 8.',
      difficulty: 'hard',
      tags: ['euclid-lemma', 'cubes', 'proof'],
    },
  ],

  'class-10-mathematics-real-numbers-exercise-1-2': [
    {
      id: 'q10m-1-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Express each number as a product of its prime factors:\n(i) 140\n(ii) 156\n(iii) 3825\n(iv) 5005\n(v) 7429',
      solution: '(i) 140 = 2 × 2 × 5 × 7 = 2² × 5 × 7\n(ii) 156 = 2 × 2 × 3 × 13 = 2² × 3 × 13\n(iii) 3825 = 3 × 3 × 5 × 5 × 17 = 3² × 5² × 17\n(iv) 5005 = 5 × 7 × 11 × 13\n(v) 7429 = 17 × 19 × 23',
      difficulty: 'easy',
      tags: ['prime-factorisation', 'real-numbers'],
    },
    {
      id: 'q10m-1-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find the LCM and HCF of the following pairs of integers and verify that LCM × HCF = product of the two numbers:\n(i) 26 and 91\n(ii) 510 and 92\n(iii) 336 and 54',
      solution: '(i) 26 = 2 × 13, 91 = 7 × 13\nHCF = 13, LCM = 2 × 7 × 13 = 182\nVerification: LCM × HCF = 182 × 13 = 2366\nProduct: 26 × 91 = 2366 ✓\n\n(ii) 510 = 2 × 3 × 5 × 17, 92 = 2² × 23\nHCF = 2, LCM = 2² × 3 × 5 × 17 × 23 = 23460\nVerification: LCM × HCF = 23460 × 2 = 46920\nProduct: 510 × 92 = 46920 ✓\n\n(iii) 336 = 2⁴ × 3 × 7, 54 = 2 × 3³\nHCF = 2 × 3 = 6, LCM = 2⁴ × 3³ × 7 = 3024\nVerification: LCM × HCF = 3024 × 6 = 18144\nProduct: 336 × 54 = 18144 ✓',
      difficulty: 'medium',
      tags: ['hcf', 'lcm', 'prime-factorisation', 'verification'],
    },
    {
      id: 'q10m-1-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Find the LCM and HCF of the following integers by applying the prime factorisation method:\n(i) 12, 15 and 21\n(ii) 17, 23 and 29\n(iii) 8, 9 and 25',
      solution: '(i) 12 = 2² × 3, 15 = 3 × 5, 21 = 3 × 7\nHCF = 3, LCM = 2² × 3 × 5 × 7 = 420\n\n(ii) 17, 23, 29 are all prime numbers\nHCF = 1, LCM = 17 × 23 × 29 = 11339\n\n(iii) 8 = 2³, 9 = 3², 25 = 5²\nHCF = 1 (no common prime factors)\nLCM = 2³ × 3² × 5² = 8 × 9 × 25 = 1800',
      difficulty: 'medium',
      tags: ['hcf', 'lcm', 'prime-factorisation'],
    },
    {
      id: 'q10m-1-2-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Given that HCF(306, 657) = 9, find LCM(306, 657).',
      solution: 'Step 1: We know LCM × HCF = Product of numbers\nStep 2: LCM × 9 = 306 × 657\nStep 3: LCM = (306 × 657) / 9\nStep 4: LCM = 306 × 73 = 22338\nTherefore, LCM(306, 657) = 22338.',
      difficulty: 'easy',
      tags: ['lcm', 'hcf', 'relationship'],
    },
    {
      id: 'q10m-1-2-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'Check whether 6ⁿ can end with the digit 0 for any natural number n.',
      solution: "Step 1: If 6ⁿ ends with 0, then it must be divisible by 5.\nStep 2: 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ\nStep 3: Prime factors of 6ⁿ are only 2 and 3.\nStep 4: For a number to end with 0, it must have 5 as a prime factor.\nSince 6ⁿ has no factor 5, it cannot end with 0 for any natural number n.",
      difficulty: 'medium',
      tags: ['prime-factors', 'divisibility', 'proof'],
    },
    {
      id: 'q10m-1-2-6',
      questionNumber: 6,
      title: 'Question 6',
      content: 'Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.',
      solution: 'First number: 7 × 11 × 13 + 13\nStep 1: = 13(7 × 11 + 1) = 13(77 + 1) = 13 × 78\nStep 2: 78 = 2 × 3 × 13\nStep 3: So the number = 13 × 2 × 3 × 13 = 2 × 3 × 13²\nSince it has factors other than 1 and itself, it is composite.\n\nSecond number: 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5\nStep 1: = 5(7 × 6 × 4 × 3 × 2 × 1 + 1) = 5(1008 + 1) = 5 × 1009\nSince it has factors 5 and 1009, it is composite.',
      difficulty: 'medium',
      tags: ['composite-numbers', 'prime-factors'],
    },
    {
      id: 'q10m-1-2-7',
      questionNumber: 7,
      title: 'Question 7',
      content: 'There is a circular path around a sports field. Sonia takes 18 minutes to drive one round of the field, while Ravi takes 12 minutes for the same. Suppose they both start at the same point and at the same time and go in the same direction. After how many minutes will they meet again at the starting point?',
      solution: 'Step 1: Time taken by Sonia = 18 min, Ravi = 12 min.\nStep 2: They will meet at the starting point after LCM(18, 12) minutes.\nStep 3: 18 = 2 × 3², 12 = 2² × 3\nStep 4: LCM = 2² × 3² = 4 × 9 = 36\nTherefore, they will meet again at the starting point after 36 minutes.',
      difficulty: 'easy',
      tags: ['lcm', 'real-life', 'circular-motion'],
    },
  ],

  'class-10-mathematics-real-numbers-exercise-1-3': [
    {
      id: 'q10m-1-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Prove that √5 is irrational.',
      solution: "Step 1: Assume √5 is rational. Then √5 = a/b, where a, b are co-prime integers, b ≠ 0.\nStep 2: Squaring: 5 = a²/b² → a² = 5b²\nStep 3: So 5 divides a², hence 5 divides a.\nStep 4: Let a = 5c. Then a² = 25c².\nStep 5: Substituting: 25c² = 5b² → 5c² = b²\nStep 6: So 5 divides b², hence 5 divides b.\nStep 7: This contradicts that a and b are co-prime (both have factor 5).\nTherefore, √5 is irrational.",
      difficulty: 'hard',
      tags: ['irrational-numbers', 'proof-by-contradiction', 'square-roots'],
    },
    {
      id: 'q10m-1-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Prove that 3 + 2√5 is irrational.',
      solution: "Step 1: Assume 3 + 2√5 is rational. Let 3 + 2√5 = a/b, where a, b are integers, b ≠ 0.\nStep 2: Then 2√5 = a/b - 3 = (a - 3b)/b\nStep 3: √5 = (a - 3b)/(2b)\nStep 4: Since a, b are integers, (a - 3b)/(2b) is rational.\nStep 5: This implies √5 is rational, which contradicts that √5 is irrational.\nTherefore, 3 + 2√5 is irrational.",
      difficulty: 'hard',
      tags: ['irrational-numbers', 'proof-by-contradiction'],
    },
    {
      id: 'q10m-1-3-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Prove that the following are irrationals:\n(i) 1/√2\n(ii) 7√5\n(iii) 6 + √2',
      solution: "(i) 1/√2\nStep 1: Assume 1/√2 is rational. Let 1/√2 = a/b, where a, b are co-prime, b ≠ 0.\nStep 2: Then √2 = b/a, which would be rational.\nStep 3: But √2 is irrational (contradiction).\nTherefore, 1/√2 is irrational.\n\n(ii) 7√5\nStep 1: Assume 7√5 is rational. Let 7√5 = a/b, where a, b are co-prime, b ≠ 0.\nStep 2: Then √5 = a/(7b), which would be rational.\nStep 3: But √5 is irrational (contradiction).\nTherefore, 7√5 is irrational.\n\n(iii) 6 + √2\nStep 1: Assume 6 + √2 is rational. Let 6 + √2 = a/b, where a, b are integers, b ≠ 0.\nStep 2: Then √2 = a/b - 6 = (a - 6b)/b, which would be rational.\nStep 3: But √2 is irrational (contradiction).\nTherefore, 6 + √2 is irrational.",
      difficulty: 'hard',
      tags: ['irrational-numbers', 'proof-by-contradiction'],
    },
  ],
};
