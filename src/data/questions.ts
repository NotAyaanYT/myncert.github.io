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

  // ----- Chapter 3: Pair of Linear Equations in Two Variables -----
  'class-10-mathematics-pair-of-linear-equations-in-two-variables-exercise-3-1': [
    {
      id: 'q10m-3-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Aftab tells his daughter, "Seven years ago, I was seven times as old as you were then. Also, three years from now, I shall be three times as old as you will be." Represent this situation algebraically and graphically.',
      solution: "Let Aftab's present age = x years\nLet his daughter's present age = y years\n\nSeven years ago:\nAftab's age = x - 7\nDaughter's age = y - 7\nGiven: x - 7 = 7(y - 7)\n⇒ x - 7 = 7y - 49\n⇒ x - 7y = -42  ...(i)\n\nThree years from now:\nAftab's age = x + 3\nDaughter's age = y + 3\nGiven: x + 3 = 3(y + 3)\n⇒ x + 3 = 3y + 9\n⇒ x - 3y = 6  ...(ii)\n\nAlgebraic representation:\nx - 7y = -42\nx - 3y = 6\n\nFor graphical representation, find solutions for each equation:\nFor x - 7y = -42: (0, 6), (7, 7), (14, 8)\nFor x - 3y = 6: (0, -2), (3, -1), (6, 0)\nPlot these points on a graph. The intersection point gives the solution.",
      difficulty: 'medium',
      tags: ['linear-equations', 'graphical-method', 'age-problems'],
    },
    {
      id: 'q10m-3-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'The coach of a cricket team buys 3 bats and 6 balls for ₹3900. Later, she buys another bat and 3 more balls of the same kind for ₹1300. Represent this situation algebraically and geometrically.',
      solution: "Let cost of one bat = ₹x\nLet cost of one ball = ₹y\n\nFirst purchase: 3 bats + 6 balls = ₹3900\n⇒ 3x + 6y = 3900\n⇒ x + 2y = 1300  ...(i)\n\nSecond purchase: 1 bat + 3 balls = ₹1300\n⇒ x + 3y = 1300  ...(ii)\n\nAlgebraic representation:\nx + 2y = 1300\nx + 3y = 1300\n\nFor geometric representation:\nFor x + 2y = 1300: (0, 650), (1300, 0), (300, 500)\nFor x + 3y = 1300: (0, 433.33), (1300, 0), (400, 300)\nPlot these points on a graph.",
      difficulty: 'medium',
      tags: ['linear-equations', 'graphical-method', 'real-life'],
    },
    {
      id: 'q10m-3-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'The cost of 2 kg of apples and 1 kg of grapes on a day was found to be ₹160. After a month, the cost of 4 kg of apples and 2 kg of grapes is ₹300. Represent the situation algebraically and geometrically.',
      solution: "Let cost of 1 kg apples = ₹x\nLet cost of 1 kg grapes = ₹y\n\nFirst case: 2x + y = 160  ...(i)\nSecond case: 4x + 2y = 300\n⇒ 2x + y = 150  ...(ii)\n\nAlgebraic representation:\n2x + y = 160\n2x + y = 150\n\nNote: The two equations represent parallel lines (same coefficients but different constants).\nThis system has no solution.\n\nFor geometric representation:\nFor 2x + y = 160: (0, 160), (80, 0), (20, 120)\nFor 2x + y = 150: (0, 150), (75, 0), (25, 100)\nThe lines are parallel and do not intersect.",
      difficulty: 'medium',
      tags: ['linear-equations', 'graphical-method', 'parallel-lines', 'no-solution'],
    },
  ],

  'class-10-mathematics-pair-of-linear-equations-in-two-variables-exercise-3-2': [
    {
      id: 'q10m-3-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Form the pair of linear equations in the following problems and find their solutions graphically:\n(i) 10 students of Class X took part in a Mathematics quiz. If the number of girls is 4 more than the number of boys, find the number of boys and girls.\n(ii) 5 pencils and 7 pens together cost ₹50, whereas 7 pencils and 5 pens together cost ₹46. Find the cost of one pencil and that of one pen.',
      solution: "(i) Let number of boys = x, number of girls = y\nTotal students: x + y = 10\nGirls 4 more than boys: y = x + 4 ⇒ -x + y = 4\n\nSolving graphically:\nFor x + y = 10: (0, 10), (10, 0), (5, 5)\nFor -x + y = 4: (0, 4), (-4, 0), (2, 6)\nIntersection point: (3, 7)\nTherefore, number of boys = 3, number of girls = 7\n\n(ii) Let cost of one pencil = ₹x, cost of one pen = ₹y\n5x + 7y = 50\n7x + 5y = 46\n\nSolving graphically:\nFor 5x + 7y = 50: (0, 50/7), (10, 0), (3, 5)\nFor 7x + 5y = 46: (0, 46/5), (46/7, 0), (3, 5)\nIntersection point: (3, 5)\nTherefore, cost of one pencil = ₹3, cost of one pen = ₹5",
      difficulty: 'medium',
      tags: ['linear-equations', 'graphical-method', 'real-life'],
    },
    {
      id: 'q10m-3-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'On comparing the ratios a₁/a₂, b₁/b₂ and c₁/c₂, find out whether the lines representing the following pairs of linear equations intersect at a point, are parallel or coincident:\n(i) 5x - 4y + 8 = 0; 7x + 6y - 9 = 0\n(ii) 9x + 3y + 12 = 0; 18x + 6y + 24 = 0\n(iii) 6x - 3y + 10 = 0; 2x - y + 9 = 0',
      solution: "(i) 5x - 4y + 8 = 0; 7x + 6y - 9 = 0\na₁/a₂ = 5/7, b₁/b₂ = -4/6 = -2/3, c₁/c₂ = 8/(-9) = -8/9\nSince a₁/a₂ ≠ b₁/b₂, the lines intersect at a point.\n\n(ii) 9x + 3y + 12 = 0; 18x + 6y + 24 = 0\na₁/a₂ = 9/18 = 1/2, b₁/b₂ = 3/6 = 1/2, c₁/c₂ = 12/24 = 1/2\nSince a₁/a₂ = b₁/b₂ = c₁/c₂, the lines are coincident.\n\n(iii) 6x - 3y + 10 = 0; 2x - y + 9 = 0\na₁/a₂ = 6/2 = 3, b₁/b₂ = -3/(-1) = 3, c₁/c₂ = 10/9\nSince a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are parallel.",
      difficulty: 'easy',
      tags: ['linear-equations', 'ratios', 'consistent-system'],
    },
    {
      id: 'q10m-3-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Solve the following pair of linear equations by the substitution method:\n(i) x + y = 14; x - y = 4\n(ii) s - t = 3; s/3 + t/2 = 6\n(iii) 3x - y = 3; 9x - 3y = 9\n(iv) 0.2x + 0.3y = 1.3; 0.4x + 0.5y = 2.3\n(v) √2x + √3y = 0; √3x - √8y = 0\n(vi) 3x/2 - 5y/3 = -2; x/3 + y/2 = 13/6',
      solution: "(i) x + y = 14 ...(1); x - y = 4 ...(2)\nFrom (2): x = y + 4\nSubstitute in (1): (y + 4) + y = 14 → 2y = 10 → y = 5\nThen x = 5 + 4 = 9\nSolution: x = 9, y = 5\n\n(ii) s - t = 3 ...(1); s/3 + t/2 = 6 ...(2)\nFrom (1): s = t + 3\nSubstitute in (2): (t + 3)/3 + t/2 = 6\nMultiply by 6: 2(t + 3) + 3t = 36 → 2t + 6 + 3t = 36 → 5t = 30 → t = 6\nThen s = 6 + 3 = 9\nSolution: s = 9, t = 6\n\n(iii) 3x - y = 3 ...(1); 9x - 3y = 9 ...(2)\nFrom (1): y = 3x - 3\nSubstitute in (2): 9x - 3(3x - 3) = 9 → 9x - 9x + 9 = 9 → 9 = 9\nThis is always true, so the equations have infinitely many solutions.\n\n(iv) 0.2x + 0.3y = 1.3 ...(1); 0.4x + 0.5y = 2.3 ...(2)\nMultiply by 10: 2x + 3y = 13 ...(1'); 4x + 5y = 23 ...(2')\nFrom (1'): 2x = 13 - 3y → x = (13 - 3y)/2\nSubstitute in (2'): 4(13 - 3y)/2 + 5y = 23 → 2(13 - 3y) + 5y = 23 → 26 - 6y + 5y = 23 → -y = -3 → y = 3\nThen x = (13 - 9)/2 = 2\nSolution: x = 2, y = 3\n\n(v) √2x + √3y = 0 ...(1); √3x - √8y = 0 ...(2)\nFrom (1): √2x = -√3y → x = -√3/√2 × y\nSubstitute in (2): √3(-√3/√2 y) - √8y = 0 → -3/√2 y - 2√2 y = 0\n→ y(-3/√2 - 2√2) = 0 → y = 0\nThen x = 0\nSolution: x = 0, y = 0\n\n(vi) 3x/2 - 5y/3 = -2 ...(1); x/3 + y/2 = 13/6 ...(2)\nMultiply (1) by 6: 9x - 10y = -12 ...(1')\nMultiply (2) by 6: 2x + 3y = 13 ...(2')\nFrom (2'): 2x = 13 - 3y → x = (13 - 3y)/2\nSubstitute in (1'): 9(13 - 3y)/2 - 10y = -12 → Multiply by 2: 9(13 - 3y) - 20y = -24 → 117 - 27y - 20y = -24 → -47y = -141 → y = 3\nThen x = (13 - 9)/2 = 2\nSolution: x = 2, y = 3",
      difficulty: 'medium',
      tags: ['linear-equations', 'substitution-method'],
    },
    {
      id: 'q10m-3-2-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Solve 2x + y = 7 and x + 2y = 5 by the elimination method. Which of the following pairs of linear equations has a unique solution, no solution, or infinitely many solutions? In case there is a unique solution, find it by using the elimination method:\n(i) x - 2y = 0; 3x + 4y = 20\n(ii) 2x + 3y = 7; 6x + 9y = 11\n(iii) 3x - 5y = 20; 6x - 10y = 40',
      solution: "2x + y = 7 ...(1); x + 2y = 5 ...(2)\nElimination: Multiply (2) by 2: 2x + 4y = 10\nSubtract from (1): (2x + y) - (2x + 4y) = 7 - 10 → -3y = -3 → y = 1\nSubstitute in (1): 2x + 1 = 7 → 2x = 6 → x = 3\nSolution: x = 3, y = 1\n\n(i) x - 2y = 0; 3x + 4y = 20\na₁/a₂ = 1/3, b₁/b₂ = -2/4 = -1/2\nSince a₁/a₂ ≠ b₁/b₂, unique solution exists.\nMultiply first by 3: 3x - 6y = 0\nSubtract from second: (3x + 4y) - (3x - 6y) = 20 - 0 → 10y = 20 → y = 2\nThen x = 2y = 4\nSolution: x = 4, y = 2\n\n(ii) 2x + 3y = 7; 6x + 9y = 11\na₁/a₂ = 2/6 = 1/3, b₁/b₂ = 3/9 = 1/3, c₁/c₂ = 7/11\nSince a₁/a₂ = b₁/b₂ ≠ c₁/c₂, no solution.\n\n(iii) 3x - 5y = 20; 6x - 10y = 40\na₁/a₂ = 3/6 = 1/2, b₁/b₂ = -5/(-10) = 1/2, c₁/c₂ = 20/40 = 1/2\nSince a₁/a₂ = b₁/b₂ = c₁/c₂, infinitely many solutions.",
      difficulty: 'medium',
      tags: ['linear-equations', 'elimination-method', 'consistent-system'],
    },
    {
      id: 'q10m-3-2-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'Which of the following pairs of linear equations has a unique solution, no solution, or infinitely many solutions? In case there is a unique solution, find it by using the cross-multiplication method:\n(i) x - 3y - 3 = 0; 3x - 9y - 2 = 0\n(ii) 2x + y = 5; 3x + 2y = 8\n(iii) 3x - 5y = 20; 6x - 10y = 40\n(iv) x - 3y - 7 = 0; 3x - 3y - 15 = 0',
      solution: "(i) x - 3y - 3 = 0; 3x - 9y - 2 = 0\na₁/a₂ = 1/3, b₁/b₂ = -3/(-9) = 1/3, c₁/c₂ = -3/(-2) = 3/2\nSince a₁/a₂ = b₁/b₂ ≠ c₁/c₂, no solution.\n\n(ii) 2x + y = 5; 3x + 2y = 8\nWrite as: 2x + y - 5 = 0; 3x + 2y - 8 = 0\na₁/a₂ = 2/3, b₁/b₂ = 1/2\nSince a₁/a₂ ≠ b₁/b₂, unique solution exists.\nBy cross-multiplication:\nx/(b₁c₂ - b₂c₁) = y/(c₁a₂ - c₂a₁) = 1/(a₁b₂ - a₂b₁)\nx/(1(-8) - 2(-5)) = y/((-5)3 - (-8)2) = 1/(2×2 - 3×1)\nx/(-8 + 10) = y/(-15 + 16) = 1/(4 - 3)\nx/2 = y/1 = 1/1\nx = 2, y = 1\n\n(iii) 3x - 5y = 20; 6x - 10y = 40\na₁/a₂ = 3/6 = 1/2, b₁/b₂ = -5/(-10) = 1/2, c₁/c₂ = 20/40 = 1/2\nSince a₁/a₂ = b₁/b₂ = c₁/c₂, infinitely many solutions.\n\n(iv) x - 3y - 7 = 0; 3x - 3y - 15 = 0\na₁/a₂ = 1/3, b₁/b₂ = -3/(-3) = 1\nSince a₁/a₂ ≠ b₁/b₂, unique solution exists.\nBy cross-multiplication:\nx/(b₁c₂ - b₂c₁) = y/(c₁a₂ - c₂a₁) = 1/(a₁b₂ - a₂b₁)\nx((-3)(-15) - (-3)(-7)) = y((-7)3 - (-15)1) = 1/(1(-3) - 3(-3))\nx/(45 - 21) = y/(-21 + 15) = 1/(-3 + 9)\nx/24 = y/(-6) = 1/6\nx = 4, y = -1",
      difficulty: 'medium',
      tags: ['linear-equations', 'cross-multiplication', 'consistent-system'],
    },
    {
      id: 'q10m-3-2-6',
      questionNumber: 6,
      title: 'Question 6',
      content: 'For which values of k will the following pair of linear equations have no solution?\n3x + y = 1; (2k - 1)x + (k - 1)y = 2k + 1',
      solution: "For no solution, lines must be parallel:\na₁/a₂ = b₁/b₂ ≠ c₁/c₂\n\n3x + y = 1 ⇒ a₁ = 3, b₁ = 1, c₁ = -1\n(2k - 1)x + (k - 1)y = 2k + 1 ⇒ a₂ = 2k - 1, b₂ = k - 1, c₂ = -(2k + 1)\n\nCondition: a₁/a₂ = b₁/b₂\n3/(2k - 1) = 1/(k - 1)\n3(k - 1) = 2k - 1\n3k - 3 = 2k - 1\nk = 2\n\nCheck c₁/c₂:\nc₁/c₂ = (-1)/(-(2k + 1)) = 1/(2k + 1)\nFor k = 2: c₁/c₂ = 1/5\na₁/a₂ = 3/(4 - 1) = 3/3 = 1\nb₁/b₂ = 1/(2 - 1) = 1/1 = 1\nSo a₁/a₂ = b₁/b₂ = 1 ≠ 1/5 = c₁/c₂ ✓\n\nTherefore, the system has no solution when k = 2.",
      difficulty: 'hard',
      tags: ['linear-equations', 'parameter', 'no-solution'],
    },
  ],

  'class-10-mathematics-pair-of-linear-equations-in-two-variables-exercise-3-3': [
    {
      id: 'q10m-3-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Solve the following pair of linear equations by the elimination method and the substitution method:\n(i) x + y = 5; 2x - 3y = 4\n(ii) 3x + 4y = 10; 2x - 2y = 2\n(iii) 3x - 5y - 4 = 0; 9x = 2y + 7\n(iv) x/2 + 2y/3 = -1; x - y/3 = 3',
      solution: "(i) x + y = 5 ...(1); 2x - 3y = 4 ...(2)\n\nElimination method:\nMultiply (1) by 3: 3x + 3y = 15\nAdd to (2): 5x = 19 → x = 19/5\nSubstitute in (1): 19/5 + y = 5 → y = 5 - 19/5 = 6/5\nSolution: x = 19/5, y = 6/5\n\nSubstitution method:\nFrom (1): y = 5 - x\nSubstitute in (2): 2x - 3(5 - x) = 4 → 2x - 15 + 3x = 4 → 5x = 19 → x = 19/5\ny = 5 - 19/5 = 6/5\n\n(ii) 3x + 4y = 10 ...(1); 2x - 2y = 2 ...(2)\n\nElimination method:\nMultiply (2) by 2: 4x - 4y = 4\nAdd to (1): 7x = 14 → x = 2\nSubstitute in (2): 4 - 2y = 2 → y = 1\nSolution: x = 2, y = 1\n\n(iii) 3x - 5y - 4 = 0 ...(1); 9x = 2y + 7 → 9x - 2y - 7 = 0 ...(2)\n\nElimination method:\nMultiply (1) by 3: 9x - 15y - 12 = 0\nSubtract (2): (9x - 15y - 12) - (9x - 2y - 7) = 0 → -13y - 5 = 0 → y = -5/13\nSubstitute in (1): 3x - 5(-5/13) - 4 = 0 → 3x + 25/13 - 4 = 0 → 3x = 4 - 25/13 = 27/13 → x = 9/13\nSolution: x = 9/13, y = -5/13\n\n(iv) x/2 + 2y/3 = -1 ...(1); x - y/3 = 3 ...(2)\n\nMultiply (1) by 6: 3x + 4y = -6\nMultiply (2) by 3: 3x - y = 9\n\nElimination:\nSubtract: (3x + 4y) - (3x - y) = -6 - 9 → 5y = -15 → y = -3\nSubstitute in 3x - y = 9: 3x + 3 = 9 → x = 2\nSolution: x = 2, y = -3",
      difficulty: 'medium',
      tags: ['linear-equations', 'elimination-method', 'substitution-method'],
    },
    {
      id: 'q10m-3-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: "Formulate the following problems as a pair of equations and hence find their solutions:\n(i) Ritu can row downstream 20 km in 2 hours and upstream 4 km in 2 hours. Find her speed of rowing in still water and the speed of the current.\n(ii) 2 women and 5 men can together finish an embroidery work in 4 days, while 3 women and 6 men can finish it in 3 days. Find the time taken by 1 woman alone and 1 man alone to finish the work.\n(iii) Roohi travels 300 km to her home partly by train and partly by bus. She takes 4 hours if she travels 60 km by train and the remaining by bus. If she travels 100 km by train and the remaining by bus, she takes 10 minutes longer. Find the speed of the train and the bus separately.",
      solution: "(i) Let speed in still water = x km/h, speed of current = y km/h\nDownstream: x + y = 20/2 = 10\nUpstream: x - y = 4/2 = 2\nAdding: 2x = 12 → x = 6, then y = 4\nSpeed of rowing in still water = 6 km/h, speed of current = 4 km/h\n\n(ii) Let work done by 1 woman in 1 day = x, 1 man in 1 day = y\n2x + 5y = 1/4 ...(1)\n3x + 6y = 1/3 ...(2)\nMultiply (1) by 3: 6x + 15y = 3/4\nMultiply (2) by 2: 6x + 12y = 2/3\nSubtract: 3y = 3/4 - 2/3 = 9/12 - 8/12 = 1/12 → y = 1/36\nSubstitute in (1): 2x + 5/36 = 1/4 → 2x = 9/36 - 5/36 = 4/36 = 1/9 → x = 1/18\n1 woman alone takes 18 days, 1 man alone takes 36 days.\n\n(iii) Let speed of train = x km/h, speed of bus = y km/h\nCase 1: 60/x + 240/y = 4 ...(1)\nCase 2: 100/x + 200/y = 4 + 10/60 = 25/6 ...(2)\nLet 1/x = a, 1/y = b\n60a + 240b = 4 ...(1')\n100a + 200b = 25/6 ...(2')\nMultiply (1') by 5: 300a + 1200b = 20\nMultiply (2') by 3: 300a + 600b = 25/2\nSubtract: 600b = 20 - 12.5 = 7.5 → b = 7.5/600 = 1/80 → y = 80 km/h\nSubstitute in (1'): 60a + 240/80 = 4 → 60a + 3 = 4 → 60a = 1 → a = 1/60 → x = 60 km/h\nSpeed of train = 60 km/h, speed of bus = 80 km/h",
      difficulty: 'hard',
      tags: ['linear-equations', 'word-problems', 'real-life'],
    },
    {
      id: 'q10m-3-3-3',
      questionNumber: 3,
      title: 'Question 3',
      content: "Solve the following pair of linear equations:\n(i) ax + by = a - b; bx - ay = a + b\n(ii) 3x/a - 2y/b = -1; 4x/a + 6y/b = 3",
      solution: "(i) ax + by = a - b ...(1); bx - ay = a + b ...(2)\nMultiply (1) by a: a²x + aby = a(a - b)\nMultiply (2) by b: b²x - aby = b(a + b)\nAdding: (a² + b²)x = a(a - b) + b(a + b) = a² - ab + ab + b² = a² + b²\nTherefore, x = 1\nSubstitute in (1): a(1) + by = a - b → a + by = a - b → by = -b → y = -1\nSolution: x = 1, y = -1\n\n(ii) 3x/a - 2y/b = -1 ...(1); 4x/a + 6y/b = 3 ...(2)\nLet X = x/a, Y = y/b\n3X - 2Y = -1 ...(1')\n4X + 6Y = 3 ...(2')\nMultiply (1') by 3: 9X - 6Y = -3\nAdd to (2'): 13X = 0 → X = 0\nSubstitute in (1'): 0 - 2Y = -1 → Y = 1/2\nx/a = 0 → x = 0\ny/b = 1/2 → y = b/2\nSolution: x = 0, y = b/2",
      difficulty: 'hard',
      tags: ['linear-equations', 'elimination-method', 'algebraic'],
    },
  ],

  // ----- Chapter 4: Quadratic Equations -----
  'class-10-mathematics-quadratic-equations-exercise-4-1': [
    {
      id: 'q10m-4-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Check whether the following are quadratic equations:\n(i) (x + 1)² = 2(x - 3)\n(ii) x² - 2x = (-2)(3 - x)\n(iii) (x - 2)(x + 1) = (x - 1)(x + 3)\n(iv) (x - 3)(2x + 1) = x(x + 5)\n(v) (2x - 1)(x - 3) = (x + 5)(x - 1)\n(vi) x² + 3x + 1 = (x - 2)²\n(vii) (x + 2)³ = 2x(x² - 1)\n(viii) x³ - 4x² - x + 1 = (x - 2)³',
      solution: "(i) (x + 1)² = 2(x - 3)\n→ x² + 2x + 1 = 2x - 6\n→ x² + 7 = 0\nYes, it's a quadratic equation (degree 2).\n\n(ii) x² - 2x = (-2)(3 - x)\n→ x² - 2x = -6 + 2x\n→ x² - 4x + 6 = 0\nYes, it's a quadratic equation.\n\n(iii) (x - 2)(x + 1) = (x - 1)(x + 3)\n→ x² - x - 2 = x² + 2x - 3\n→ -3x + 1 = 0\nNo, it's a linear equation (degree 1).\n\n(iv) (x - 3)(2x + 1) = x(x + 5)\n→ 2x² - 5x - 3 = x² + 5x\n→ x² - 10x - 3 = 0\nYes, it's a quadratic equation.\n\n(v) (2x - 1)(x - 3) = (x + 5)(x - 1)\n→ 2x² - 7x + 3 = x² + 4x - 5\n→ x² - 11x + 8 = 0\nYes, it's a quadratic equation.\n\n(vi) x² + 3x + 1 = (x - 2)²\n→ x² + 3x + 1 = x² - 4x + 4\n→ 7x - 3 = 0\nNo, it's a linear equation.\n\n(vii) (x + 2)³ = 2x(x² - 1)\n→ x³ + 6x² + 12x + 8 = 2x³ - 2x\n→ -x³ + 6x² + 14x + 8 = 0 → x³ - 6x² - 14x - 8 = 0\nNo, it's a cubic equation (degree 3).\n\n(viii) x³ - 4x² - x + 1 = (x - 2)³\n→ x³ - 4x² - x + 1 = x³ - 6x² + 12x - 8\n→ 2x² - 13x + 9 = 0\nYes, it's a quadratic equation.",
      difficulty: 'easy',
      tags: ['quadratic-equations', 'standard-form', 'identification'],
    },
    {
      id: 'q10m-4-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: "Represent the following situations in the form of quadratic equations:\n(i) The area of a rectangular plot is 528 m². The length of the plot (in metres) is one more than twice its breadth. We need to find the length and breadth of the plot.\n(ii) The product of two consecutive positive integers is 306. We need to find the integers.\n(iii) Rohan's mother is 26 years older than him. The product of their ages (in years) 3 years from now will be 360. We need to find Rohan's present age.\n(iv) A train travels a distance of 480 km at a uniform speed. If the speed had been 8 km/h less, then it would have taken 3 hours more to cover the same distance. We need to find the speed of the train.",
      solution: "(i) Let breadth = x m, length = (2x + 1) m\nArea = x(2x + 1) = 528\n→ 2x² + x - 528 = 0\n\n(ii) Let integers be x and (x + 1)\nx(x + 1) = 306\n→ x² + x - 306 = 0\n\n(iii) Let Rohan's present age = x years\nMother's age = (x + 26) years\nAfter 3 years: (x + 3)(x + 29) = 360\n→ x² + 32x + 87 = 360\n→ x² + 32x - 273 = 0\n\n(iv) Let speed = x km/h, time = 480/x hours\nIf speed is (x - 8) km/h, time = 480/(x - 8) hours\nGiven: 480/(x - 8) - 480/x = 3\n→ 480(x - x + 8)/[x(x - 8)] = 3\n→ 3840 = 3x(x - 8)\n→ 1280 = x² - 8x\n→ x² - 8x - 1280 = 0",
      difficulty: 'medium',
      tags: ['quadratic-equations', 'word-problems', 'real-life'],
    },
  ],

  'class-10-mathematics-quadratic-equations-exercise-4-2': [
    {
      id: 'q10m-4-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Find the roots of the following quadratic equations by factorisation:\n(i) x² - 3x - 10 = 0\n(ii) 2x² + x - 6 = 0\n(iii) √2x² + 7x + 5√2 = 0\n(iv) 2x² - x + 1/8 = 0\n(v) 100x² - 20x + 1 = 0',
      solution: "(i) x² - 3x - 10 = 0\n→ x² - 5x + 2x - 10 = 0\n→ x(x - 5) + 2(x - 5) = 0\n→ (x - 5)(x + 2) = 0\n→ x = 5 or x = -2\n\n(ii) 2x² + x - 6 = 0\n→ 2x² + 4x - 3x - 6 = 0\n→ 2x(x + 2) - 3(x + 2) = 0\n→ (x + 2)(2x - 3) = 0\n→ x = -2 or x = 3/2\n\n(iii) √2x² + 7x + 5√2 = 0\n→ √2x² + 5x + 2x + 5√2 = 0\n→ x(√2x + 5) + √2(√2x + 5) = 0\n→ (√2x + 5)(x + √2) = 0\n→ x = -5/√2 or x = -√2\n\n(iv) 2x² - x + 1/8 = 0\nMultiply by 8: 16x² - 8x + 1 = 0\n→ 16x² - 4x - 4x + 1 = 0\n→ 4x(4x - 1) - 1(4x - 1) = 0\n→ (4x - 1)(4x - 1) = 0\n→ x = 1/4 (repeated root)\n\n(v) 100x² - 20x + 1 = 0\n→ 100x² - 10x - 10x + 1 = 0\n→ 10x(10x - 1) - 1(10x - 1) = 0\n→ (10x - 1)(10x - 1) = 0\n→ x = 1/10 (repeated root)",
      difficulty: 'easy',
      tags: ['quadratic-equations', 'factorisation', 'roots'],
    },
    {
      id: 'q10m-4-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Solve the following situations mathematically:\n(i) John and Jivanti together have 45 marbles. Both of them lost 5 marbles each, and the product of the number of marbles they now have is 124. Find out how many marbles they had to start with.\n(ii) A cottage industry produces a certain number of toys in a day. The cost of production of each toy (in rupees) was found to be 55 minus the number of toys produced in a day. On a particular day, the total cost of production was ₹750. Find out the number of toys produced on that day.',
      solution: "(i) Let John's marbles = x, then Jivanti's marbles = 45 - x\nAfter losing 5 each:\nJohn has x - 5, Jivanti has 40 - x\nGiven: (x - 5)(40 - x) = 124\n→ 40x - x² - 200 + 5x = 124\n→ -x² + 45x - 324 = 0\n→ x² - 45x + 324 = 0\n→ x² - 36x - 9x + 324 = 0\n→ x(x - 36) - 9(x - 36) = 0\n→ (x - 36)(x - 9) = 0\n→ x = 36 or x = 9\nIf John has 36, Jivanti has 9. If John has 9, Jivanti has 36.\n\n(ii) Let number of toys produced = x\nCost per toy = (55 - x) rupees\nTotal cost = x(55 - x) = 750\n→ 55x - x² = 750\n→ x² - 55x + 750 = 0\n→ x² - 25x - 30x + 750 = 0\n→ x(x - 25) - 30(x - 25) = 0\n→ (x - 25)(x - 30) = 0\n→ x = 25 or x = 30\nBoth are valid. So 25 or 30 toys were produced.",
      difficulty: 'medium',
      tags: ['quadratic-equations', 'word-problems', 'factorisation'],
    },
    {
      id: 'q10m-4-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Find two numbers whose sum is 27 and product is 182.',
      solution: "Let the numbers be x and (27 - x)\nGiven: x(27 - x) = 182\n→ 27x - x² = 182\n→ x² - 27x + 182 = 0\n→ x² - 13x - 14x + 182 = 0\n→ x(x - 13) - 14(x - 13) = 0\n→ (x - 13)(x - 14) = 0\n→ x = 13 or x = 14\nIf x = 13, numbers are 13 and 14.\nIf x = 14, numbers are 14 and 13.\nTherefore, the numbers are 13 and 14.",
      difficulty: 'easy',
      tags: ['quadratic-equations', 'factorisation', 'number-problems'],
    },
  ],

  'class-10-mathematics-quadratic-equations-exercise-4-3': [
    {
      id: 'q10m-4-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Find the roots of the following quadratic equations, if they exist, by the method of completing the square:\n(i) 2x² - 7x + 3 = 0\n(ii) 2x² + x - 4 = 0\n(iii) 4x² + 4√3x + 3 = 0\n(iv) 2x² + x + 4 = 0',
      solution: "(i) 2x² - 7x + 3 = 0\nDivide by 2: x² - 7x/2 + 3/2 = 0\nx² - 7x/2 = -3/2\nAdd (7/4)² = 49/16: x² - 7x/2 + 49/16 = -3/2 + 49/16\n(x - 7/4)² = (-24 + 49)/16 = 25/16\nx - 7/4 = ±5/4\nx = 7/4 ± 5/4 → x = 3 or x = 1/2\n\n(ii) 2x² + x - 4 = 0\nDivide by 2: x² + x/2 - 2 = 0\nx² + x/2 = 2\nAdd (1/4)² = 1/16: x² + x/2 + 1/16 = 2 + 1/16 = 33/16\n(x + 1/4)² = 33/16\nx + 1/4 = ±√33/4\nx = (-1 ± √33)/4\n\n(iii) 4x² + 4√3x + 3 = 0\nDivide by 4: x² + √3x + 3/4 = 0\nx² + √3x = -3/4\nAdd (√3/2)² = 3/4: x² + √3x + 3/4 = -3/4 + 3/4 = 0\n(x + √3/2)² = 0\nx = -√3/2 (repeated root)\n\n(iv) 2x² + x + 4 = 0\nDivide by 2: x² + x/2 + 2 = 0\nx² + x/2 = -2\nAdd (1/4)² = 1/16: x² + x/2 + 1/16 = -2 + 1/16 = -31/16\n(x + 1/4)² = -31/16\nNo real roots exist since RHS is negative.",
      difficulty: 'medium',
      tags: ['quadratic-equations', 'completing-the-square', 'roots'],
    },
    {
      id: 'q10m-4-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find the roots of the quadratic equations given in Q.1 above by applying the quadratic formula.',
      solution: "Quadratic formula: x = [-b ± √(b² - 4ac)] / 2a\n\n(i) 2x² - 7x + 3 = 0\na = 2, b = -7, c = 3\nDiscriminant: b² - 4ac = 49 - 24 = 25\nx = [7 ± √25]/4 = [7 ± 5]/4\nx = 12/4 = 3 or x = 2/4 = 1/2\n\n(ii) 2x² + x - 4 = 0\na = 2, b = 1, c = -4\nDiscriminant: 1 + 32 = 33\nx = [-1 ± √33]/4\n\n(iii) 4x² + 4√3x + 3 = 0\na = 4, b = 4√3, c = 3\nDiscriminant: (4√3)² - 48 = 48 - 48 = 0\nx = [-4√3 ± 0]/8 = -√3/2 (repeated)\n\n(iv) 2x² + x + 4 = 0\na = 2, b = 1, c = 4\nDiscriminant: 1 - 32 = -31 < 0\nNo real roots.",
      difficulty: 'easy',
      tags: ['quadratic-equations', 'quadratic-formula', 'discriminant'],
    },
    {
      id: 'q10m-4-3-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Find the roots of the following equations:\n(i) x - 1/x = 3, x ≠ 0\n(ii) 1/(x+4) - 1/(x-7) = 11/30, x ≠ -4, 7',
      solution: "(i) x - 1/x = 3\nMultiply by x: x² - 1 = 3x\nx² - 3x - 1 = 0\nUsing quadratic formula:\nx = [3 ± √(9 + 4)]/2 = [3 ± √13]/2\n\n(ii) 1/(x+4) - 1/(x-7) = 11/30\n[(x-7) - (x+4)]/[(x+4)(x-7)] = 11/30\n-11/[(x+4)(x-7)] = 11/30\n-1/[(x+4)(x-7)] = 1/30\n(x+4)(x-7) = -30\nx² - 3x - 28 = -30\nx² - 3x + 2 = 0\n(x - 1)(x - 2) = 0\nx = 1 or x = 2",
      difficulty: 'hard',
      tags: ['quadratic-equations', 'rational-equations'],
    },
  ],

  // ----- Chapter 5: Arithmetic Progressions -----
  'class-10-mathematics-arithmetic-progressions-exercise-5-1': [
    {
      id: 'q10m-5-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'In which of the following situations does the list of numbers involved make an arithmetic progression, and why?\n(i) The taxi fare after each km when the fare is ₹15 for the first km and ₹8 for each additional km.\n(ii) The amount of air present in a cylinder when a vacuum pump removes 1/4 of the air remaining in the cylinder at a time.\n(iii) The cost of digging a well after every metre of digging, when it costs ₹150 for the first metre and rises by ₹50 for each subsequent metre.\n(iv) The amount of money in the account every year when ₹10000 is deposited at compound interest at 8% per annum.',
      solution: "(i) Fare after 1st km = ₹15\nFare after 2nd km = 15 + 8 = ₹23\nFare after 3rd km = 23 + 8 = ₹31\nFare after 4th km = 31 + 8 = ₹39\nSequence: 15, 23, 31, 39, ...\nCommon difference = 8\nYes, it is an AP.\n\n(ii) Let initial air = V\nAfter 1st pump = V - V/4 = 3V/4\nAfter 2nd pump = 3V/4 - (3V/4)/4 = 9V/16\nAfter 3rd pump = 9V/16 - (9V/16)/4 = 27V/64\nSequence: V, 3V/4, 9V/16, 27V/64, ...\nDifference: 3V/4 - V = -V/4, 9V/16 - 3V/4 = -3V/16\nSince differences are not equal, it is not an AP.\n\n(iii) Cost after 1st metre = ₹150\nCost after 2nd metre = 150 + 50 = ₹200\nCost after 3rd metre = 200 + 50 = ₹250\nSequence: 150, 200, 250, 300, ...\nCommon difference = 50\nYes, it is an AP.\n\n(iv) Initial amount = ₹10000\nAfter 1st year = 10000(1 + 0.08) = ₹10800\nAfter 2nd year = 10800(1 + 0.08) = ₹11664\nAfter 3rd year = 11664(1 + 0.08) = ₹12597.12\nDifference: 10800 - 10000 = 800, 11664 - 10800 = 864\nSince differences are not equal, it is not an AP.",
      difficulty: 'easy',
      tags: ['arithmetic-progressions', 'identification', 'real-life'],
    },
    {
      id: 'q10m-5-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Write first four terms of the AP, when the first term a and the common difference d are given as follows:\n(i) a = 10, d = 10\n(ii) a = -2, d = 0\n(iii) a = 4, d = -3\n(iv) a = -1, d = 1/2\n(v) a = -1.25, d = -0.25',
      solution: "Using formula: aₙ = a + (n-1)d\n\n(i) a = 10, d = 10\na₁ = 10, a₂ = 20, a₃ = 30, a₄ = 40\nAP: 10, 20, 30, 40\n\n(ii) a = -2, d = 0\na₁ = -2, a₂ = -2, a₃ = -2, a₄ = -2\nAP: -2, -2, -2, -2 (constant AP)\n\n(iii) a = 4, d = -3\na₁ = 4, a₂ = 1, a₃ = -2, a₄ = -5\nAP: 4, 1, -2, -5\n\n(iv) a = -1, d = 1/2\na₁ = -1, a₂ = -1/2, a₃ = 0, a₄ = 1/2\nAP: -1, -1/2, 0, 1/2\n\n(v) a = -1.25, d = -0.25\na₁ = -1.25, a₂ = -1.50, a₃ = -1.75, a₄ = -2.00\nAP: -1.25, -1.50, -1.75, -2.00",
      difficulty: 'easy',
      tags: ['arithmetic-progressions', 'terms', 'common-difference'],
    },
    {
      id: 'q10m-5-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'For the following APs, write the first term and the common difference:\n(i) 3, 1, -1, -3, ...\n(ii) -5, -1, 3, 7, ...\n(iii) 1/3, 5/3, 9/3, 13/3, ...\n(iv) 0.6, 1.7, 2.8, 3.9, ...',
      solution: "(i) 3, 1, -1, -3, ...\na = 3\nd = a₂ - a₁ = 1 - 3 = -2\n\n(ii) -5, -1, 3, 7, ...\na = -5\nd = -1 - (-5) = 4\n\n(iii) 1/3, 5/3, 9/3, 13/3, ...\na = 1/3\nd = 5/3 - 1/3 = 4/3\n\n(iv) 0.6, 1.7, 2.8, 3.9, ...\na = 0.6\nd = 1.7 - 0.6 = 1.1",
      difficulty: 'easy',
      tags: ['arithmetic-progressions', 'first-term', 'common-difference'],
    },
  ],

  'class-10-mathematics-arithmetic-progressions-exercise-5-2': [
    {
      id: 'q10m-5-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Fill in the blanks in the following table, given that a is the first term, d the common difference and aₙ the nth term of the AP:\n(i) a = 7, d = 3, n = 8, aₙ = ?\n(ii) a = -18, d = ?, n = 10, aₙ = 0\n(iii) a = ?, d = -3, n = 18, aₙ = -5\n(iv) a = -18.9, d = 2.5, n = ?, aₙ = 3.6\n(v) a = 3.5, d = 0, n = 105, aₙ = ?',
      solution: "Using formula: aₙ = a + (n-1)d\n\n(i) a₈ = 7 + (8-1)(3) = 7 + 21 = 28\n\n(ii) 0 = -18 + (10-1)d → 9d = 18 → d = 2\n\n(iii) -5 = a + (18-1)(-3)\n-5 = a - 51 → a = 46\n\n(iv) 3.6 = -18.9 + (n-1)(2.5)\n22.5 = (n-1)(2.5)\nn - 1 = 9 → n = 10\n\n(v) a₁₀₅ = 3.5 + (105-1)(0) = 3.5",
      difficulty: 'easy',
      tags: ['arithmetic-progressions', 'nth-term', 'formula'],
    },
    {
      id: 'q10m-5-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find the 31st term of an AP whose 11th term is 38 and the 16th term is 73.',
      solution: "Let first term = a, common difference = d\na₁₁ = a + 10d = 38 ...(1)\na₁₆ = a + 15d = 73 ...(2)\nSubtract (1) from (2): 5d = 35 → d = 7\nFrom (1): a + 70 = 38 → a = -32\n\na₃₁ = a + 30d = -32 + 30(7) = -32 + 210 = 178\n\nThe 31st term is 178.",
      difficulty: 'medium',
      tags: ['arithmetic-progressions', 'nth-term', 'simultaneous-equations'],
    },
    {
      id: 'q10m-5-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'An AP consists of 50 terms of which 3rd term is 12 and the last term is 106. Find the 29th term.',
      solution: "Let first term = a, common difference = d\na₃ = a + 2d = 12 ...(1)\na₅₀ = a + 49d = 106 ...(2)\nSubtract (1) from (2): 47d = 94 → d = 2\nFrom (1): a + 4 = 12 → a = 8\n\na₂₉ = a + 28d = 8 + 28(2) = 8 + 56 = 64\n\nThe 29th term is 64.",
      difficulty: 'medium',
      tags: ['arithmetic-progressions', 'nth-term'],
    },
    {
      id: 'q10m-5-2-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'If the 3rd and the 9th terms of an AP are 4 and -8 respectively, which term of this AP is zero?',
      solution: "a₃ = a + 2d = 4 ...(1)\na₉ = a + 8d = -8 ...(2)\nSubtract (1) from (2): 6d = -12 → d = -2\nFrom (1): a - 4 = 4 → a = 8\n\nLet nth term be zero:\na + (n-1)d = 0\n8 + (n-1)(-2) = 0\n8 - 2n + 2 = 0\n10 - 2n = 0\nn = 5\n\nThe 5th term of the AP is zero.",
      difficulty: 'medium',
      tags: ['arithmetic-progressions', 'nth-term', 'zero-term'],
    },
  ],

  // ----- Chapter 6: Triangles -----
  'class-10-mathematics-triangles-exercise-6-1': [
    {
      id: 'q10m-6-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'In ΔABC, D and E are points on sides AB and AC respectively such that DE ∥ BC. If AD = 2.4 cm, DB = 3.6 cm, and AE = 2 cm, find EC.',
      solution: "Given: DE ∥ BC\nBy Basic Proportionality Theorem:\nAD/DB = AE/EC\n2.4/3.6 = 2/EC\n2/3 = 2/EC\nEC = 3 cm\n\nTherefore, EC = 3 cm.",
      difficulty: 'easy',
      tags: ['triangles', 'basic-proportionality-theorem', 'thales-theorem'],
    },
    {
      id: 'q10m-6-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'In ΔABC, D and E are points on sides AB and AC such that DE ∥ BC. If AD = 1.5 cm, DB = 3 cm, and AE = 1 cm, find EC.',
      solution: "Given: DE ∥ BC\nBy Basic Proportionality Theorem:\nAD/DB = AE/EC\n1.5/3 = 1/EC\n1/2 = 1/EC\nEC = 2 cm\n\nTherefore, EC = 2 cm.",
      difficulty: 'easy',
      tags: ['triangles', 'basic-proportionality-theorem'],
    },
    {
      id: 'q10m-6-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'In ΔABC, DE ∥ BC. If AD = x, DB = x - 2, AE = x + 2, EC = x - 1, find the value of x.',
      solution: "Given: DE ∥ BC\nBy Basic Proportionality Theorem:\nAD/DB = AE/EC\nx/(x-2) = (x+2)/(x-1)\nCross multiply: x(x-1) = (x-2)(x+2)\nx² - x = x² - 4\n-x = -4\nx = 4\n\nTherefore, x = 4.",
      difficulty: 'medium',
      tags: ['triangles', 'basic-proportionality-theorem', 'algebra'],
    },
    {
      id: 'q10m-6-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'In the given figure, if PQ ∥ RS, prove that ΔPOQ ~ ΔSOR.\n\n[Note: In the NCERT textbook, this is a figure with two triangles where PQ ∥ RS]',
      solution: "Given: PQ ∥ RS\nTo prove: ΔPOQ ~ ΔSOR\n\nProof:\n∠POQ = ∠SOR (vertically opposite angles)\n∠OPQ = ∠ORS (alternate interior angles, PQ ∥ RS)\n∠OQP = ∠OSR (alternate interior angles, PQ ∥ RS)\n\nTherefore, by AAA similarity criterion, ΔPOQ ~ ΔSOR.\nHence proved.",
      difficulty: 'medium',
      tags: ['triangles', 'similarity', 'parallel-lines', 'aaa-criterion'],
    },
  ],

  'class-10-mathematics-triangles-exercise-6-2': [
    {
      id: 'q10m-6-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'In figure (i) and (ii), DE ∥ BC. Find EC in (i) and AD in (ii).\n\n[Note: Standard NCERT figures with given measurements]',
      solution: "For figure (i):\nGiven: AD = 1.5 cm, DB = 3 cm, AE = 1 cm\nBy BPT: AD/DB = AE/EC\n1.5/3 = 1/EC\nEC = 2 cm\n\nFor figure (ii):\nGiven: DB = 7.2 cm, AE = 1.8 cm, EC = 5.4 cm\nBy BPT: AD/DB = AE/EC\nAD/7.2 = 1.8/5.4\nAD/7.2 = 1/3\nAD = 2.4 cm",
      difficulty: 'easy',
      tags: ['triangles', 'basic-proportionality-theorem'],
    },
    {
      id: 'q10m-6-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'E and F are points on the sides PQ and PR respectively of ΔPQR. For each of the following cases, state whether EF ∥ QR:\n(i) PE = 3.9 cm, EQ = 3 cm, PF = 3.6 cm, FR = 2.4 cm\n(ii) PE = 4 cm, QE = 4.5 cm, PF = 8 cm, RF = 9 cm\n(iii) PQ = 1.28 cm, PR = 2.56 cm, PE = 0.18 cm, PF = 0.36 cm',
      solution: "By converse of BPT, EF ∥ QR if PE/EQ = PF/FR\n\n(i) PE/EQ = 3.9/3 = 1.3\nPF/FR = 3.6/2.4 = 1.5\nSince 1.3 ≠ 1.5, EF is not parallel to QR.\n\n(ii) PE/EQ = 4/4.5 = 8/9\nPF/FR = 8/9\nSince 8/9 = 8/9, EF ∥ QR.\n\n(iii) PE/EQ = 0.18/(1.28-0.18) = 0.18/1.10 = 9/55\nPF/FR = 0.36/(2.56-0.36) = 0.36/2.20 = 9/55\nSince 9/55 = 9/55, EF ∥ QR.",
      difficulty: 'medium',
      tags: ['triangles', 'converse-of-bpt', 'parallel-lines'],
    },
    {
      id: 'q10m-6-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'In ΔABC, D and E are points on AB and AC respectively such that AD = 2.4 cm, AE = 3.2 cm, DE = 2 cm, and BC = 5 cm. Prove that DE ∥ BC.',
      solution: "Given: AD = 2.4 cm, AE = 3.2 cm, DE = 2 cm, BC = 5 cm\n\nCheck if AD/AB = AE/AC = DE/BC:\nAB = ? Not given directly.\n\nBy converse of BPT, we need to check AD/DB = AE/EC.\nBut we don't have DB or EC directly.\n\nLet's use similarity:\nIf DE ∥ BC, then ΔADE ~ ΔABC\nAD/AB = AE/AC = DE/BC = 2/5 = 0.4\n\nSince DE/BC = 2/5, and if AD/AB = AE/AC = 2/5, then DE ∥ BC.\n\nWe can verify: AD = 2.4, so AB = AD/(2/5) = 2.4 × 5/2 = 6\nDB = AB - AD = 6 - 2.4 = 3.6\nAD/DB = 2.4/3.6 = 2/3\n\nSimilarly, AE = 3.2, so AC = 3.2 × 5/2 = 8\nEC = AC - AE = 8 - 3.2 = 4.8\nAE/EC = 3.2/4.8 = 2/3\n\nSince AD/DB = AE/EC, by converse of BPT, DE ∥ BC.",
      difficulty: 'medium',
      tags: ['triangles', 'converse-of-bpt', 'similarity'],
    },
  ],

  'class-10-mathematics-triangles-exercise-6-3': [
    {
      id: 'q10m-6-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'State which pairs of triangles in the given figures are similar. Write the similarity criterion used and the similarity relation in symbolic form.\n\n[Note: NCERT textbook has 5 pairs of triangles with marked angles/sides]',
      solution: "The similarity criteria used are:\n\n(i) AAA similarity: If corresponding angles are equal, triangles are similar.\n(ii) SSS similarity: If corresponding sides are in the same ratio, triangles are similar.\n(iii) SAS similarity: If two sides are in proportion and the included angle is equal, triangles are similar.\n\nFor each pair, check:\n- If all three angles match → AAA similarity\n- If all three sides are in proportion → SSS similarity\n- If two sides are proportional and included angle is equal → SAS similarity\n\nSymbolic form example: ΔABC ~ ΔDEF (by AAA criterion)",
      difficulty: 'medium',
      tags: ['triangles', 'similarity-criteria', 'aaa', 'sss', 'sas'],
    },
    {
      id: 'q10m-6-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'In the given figure, ΔODC ~ ΔOBA, ∠BOC = 125° and ∠CDO = 70°. Find ∠DOC, ∠DCO and ∠OAB.',
      solution: "Given: ΔODC ~ ΔOBA, ∠BOC = 125°, ∠CDO = 70°\n\nSince ΔODC ~ ΔOBA:\n∠CDO = ∠OAB = 70° (corresponding angles)\n∠DOC = ∠AOB (corresponding angles)\n∠DCO = ∠OBA (corresponding angles)\n\nNow, ∠DOC + ∠BOC = 180° (linear pair)\n∠DOC + 125° = 180°\n∠DOC = 55°\n\nTherefore, ∠AOB = 55°\n\nIn ΔODC:\n∠DCO = 180° - (∠CDO + ∠DOC)\n∠DCO = 180° - (70° + 55°) = 55°\n\nTherefore, ∠OAB = 70°, ∠DCO = 55°, ∠DOC = 55°.",
      difficulty: 'medium',
      tags: ['triangles', 'similarity', 'angle-calculation'],
    },
  ],

  // ----- Chapter 7: Coordinate Geometry -----
  'class-10-mathematics-coordinate-geometry-exercise-7-1': [
    {
      id: 'q10m-7-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Find the distance between the following pairs of points:\n(i) (2, 3), (4, 1)\n(ii) (-5, 7), (-1, 3)\n(iii) (a, b), (-a, -b)',
      solution: "Distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]\n\n(i) d = √[(4-2)² + (1-3)²]\n   = √[2² + (-2)²]\n   = √[4 + 4]\n   = √8 = 2√2 units\n\n(ii) d = √[(-1-(-5))² + (3-7)²]\n   = √[4² + (-4)²]\n   = √[16 + 16]\n   = √32 = 4√2 units\n\n(iii) d = √[(-a-a)² + (-b-b)²]\n    = √[(-2a)² + (-2b)²]\n    = √[4a² + 4b²]\n    = 2√(a² + b²) units",
      difficulty: 'easy',
      tags: ['coordinate-geometry', 'distance-formula'],
    },
    {
      id: 'q10m-7-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find the distance between the points (0, 0) and (36, 15). Also find the distance between the towns A and B if town B is located 36 km east and 15 km north of town A.',
      solution: "Distance = √[(36-0)² + (15-0)²]\n         = √[1296 + 225]\n         = √1521\n         = 39 units\n\nFor the towns: Distance between A and B = 39 km.\n\nThe distance between the points (0, 0) and (36, 15) is 39 units.\nThe distance between towns A and B is 39 km.",
      difficulty: 'easy',
      tags: ['coordinate-geometry', 'distance-formula', 'real-life'],
    },
    {
      id: 'q10m-7-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Determine if the points (1, 5), (2, 3) and (-2, -11) are collinear.',
      solution: "Three points A(x₁,y₁), B(x₂,y₂), C(x₃,y₃) are collinear if AB + BC = AC or AB + AC = BC or AC + BC = AB.\n\nAB = √[(2-1)² + (3-5)²] = √[1 + 4] = √5\nBC = √[(-2-2)² + (-11-3)²] = √[16 + 196] = √212 = 2√53\nAC = √[(-2-1)² + (-11-5)²] = √[9 + 256] = √265\n\nCheck: AB + BC = √5 + 2√53 ≈ 2.236 + 14.56 = 16.796\nAC = √265 ≈ 16.279\n\nSince AB + BC ≠ AC and no combination gives equality, the points are NOT collinear.",
      difficulty: 'medium',
      tags: ['coordinate-geometry', 'distance-formula', 'collinearity'],
    },
    {
      id: 'q10m-7-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Check whether (5, -2), (6, 4) and (7, -2) are the vertices of an isosceles triangle.',
      solution: "Let A(5, -2), B(6, 4), C(7, -2)\n\nAB = √[(6-5)² + (4-(-2))²] = √[1 + 36] = √37\nBC = √[(7-6)² + (-2-4)²] = √[1 + 36] = √37\nAC = √[(7-5)² + (-2-(-2))²] = √[4 + 0] = 2\n\nSince AB = BC = √37, two sides are equal.\nTherefore, ΔABC is an isosceles triangle.",
      difficulty: 'easy',
      tags: ['coordinate-geometry', 'distance-formula', 'isosceles-triangle'],
    },
  ],

  'class-10-mathematics-coordinate-geometry-exercise-7-2': [
    {
      id: 'q10m-7-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Find the coordinates of the point which divides the join of (-1, 7) and (4, -3) in the ratio 2 : 3.',
      solution: "Section formula: Point P(x, y) dividing A(x₁,y₁) and B(x₂,y₂) in ratio m:n is:\nx = (mx₂ + nx₁)/(m+n), y = (my₂ + ny₁)/(m+n)\n\nHere, A(-1, 7), B(4, -3), m:n = 2:3\n\nx = [2(4) + 3(-1)]/(2+3) = (8 - 3)/5 = 5/5 = 1\ny = [2(-3) + 3(7)]/(2+3) = (-6 + 21)/5 = 15/5 = 3\n\nThe point is (1, 3).",
      difficulty: 'easy',
      tags: ['coordinate-geometry', 'section-formula'],
    },
    {
      id: 'q10m-7-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find the coordinates of the points of trisection of the line segment joining (4, -1) and (-2, -3).',
      solution: "Points of trisection divide the segment in ratio 1:2 and 2:1.\n\nLet A(4, -1) and B(-2, -3).\n\nFor point P dividing in ratio 1:2 (from A):\nP(x₁, y₁):\nx₁ = [1(-2) + 2(4)]/(1+2) = (-2 + 8)/3 = 6/3 = 2\ny₁ = [1(-3) + 2(-1)]/3 = (-3 - 2)/3 = -5/3\nP = (2, -5/3)\n\nFor point Q dividing in ratio 2:1 (from A):\nQ(x₂, y₂):\nx₂ = [2(-2) + 1(4)]/(2+1) = (-4 + 4)/3 = 0\ny₂ = [2(-3) + 1(-1)]/3 = (-6 - 1)/3 = -7/3\nQ = (0, -7/3)\n\nThe points of trisection are (2, -5/3) and (0, -7/3).",
      difficulty: 'medium',
      tags: ['coordinate-geometry', 'section-formula', 'trisection'],
    },
    {
      id: 'q10m-7-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Find the ratio in which the line segment joining the points (-3, 10) and (6, -8) is divided by (-1, 6).',
      solution: "Let point P(-1, 6) divide A(-3, 10) and B(6, -8) in ratio k:1.\n\nUsing section formula:\nx = (k(6) + 1(-3))/(k+1) = -1\n(6k - 3)/(k+1) = -1\n6k - 3 = -k - 1\n7k = 2\nk = 2/7\n\nCheck with y:\ny = (k(-8) + 1(10))/(k+1) = (-8k + 10)/(k+1)\n= (-8(2/7) + 10)/(2/7 + 1)\n= (-16/7 + 10)/(9/7)\n= ((-16 + 70)/7)/(9/7)\n= (54/7)/(9/7) = 54/9 = 6 ✓\n\nThe ratio is 2:7 (i.e., 2/7 : 1 = 2:7).",
      difficulty: 'medium',
      tags: ['coordinate-geometry', 'section-formula', 'ratio'],
    },
  ],

  // ----- Chapter 8: Introduction to Trigonometry -----
  'class-10-mathematics-introduction-to-trigonometry-exercise-8-1': [
    {
      id: 'q10m-8-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'In ΔABC, right-angled at B, AB = 24 cm, BC = 7 cm. Determine:\n(i) sin A, cos A\n(ii) sin C, cos C',
      solution: "Given: AB = 24 cm, BC = 7 cm, right angle at B.\n\nBy Pythagoras theorem:\nAC² = AB² + BC² = 24² + 7² = 576 + 49 = 625\nAC = √625 = 25 cm\n\n(i) For angle A:\n   sin A = opposite/hypotenuse = BC/AC = 7/25\n   cos A = adjacent/hypotenuse = AB/AC = 24/25\n\n(ii) For angle C:\n    sin C = opposite/hypotenuse = AB/AC = 24/25\n    cos C = adjacent/hypotenuse = BC/AC = 7/25",
      difficulty: 'easy',
      tags: ['trigonometry', 'trigonometric-ratios', 'pythagoras'],
    },
    {
      id: 'q10m-8-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'In the given figure, find tan P - cot R.\n\n[Note: In NCERT textbook, a right triangle PQR with right angle at Q, PQ = 12 cm, PR = 13 cm]',
      solution: "Given: PQ = 12 cm, PR = 13 cm, right angle at Q.\n\nBy Pythagoras theorem:\nQR² = PR² - PQ² = 13² - 12² = 169 - 144 = 25\nQR = 5 cm\n\ntan P = opposite/adjacent = QR/PQ = 5/12\ncot R = adjacent/opposite = QR/PQ = 5/12\n\ntan P - cot R = 5/12 - 5/12 = 0",
      difficulty: 'easy',
      tags: ['trigonometry', 'trigonometric-ratios', 'tan', 'cot'],
    },
    {
      id: 'q10m-8-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'If sin A = 3/4, calculate cos A and tan A.',
      solution: "Given: sin A = 3/4\n\nsin A = opposite/hypotenuse = 3/4\nLet opposite = 3k, hypotenuse = 4k\n\nBy Pythagoras theorem:\nadjacent² = hypotenuse² - opposite² = (4k)² - (3k)² = 16k² - 9k² = 7k²\nadjacent = √7 × k\n\ncos A = adjacent/hypotenuse = √7k/4k = √7/4\ntan A = opposite/adjacent = 3k/(√7k) = 3/√7 = (3√7)/7",
      difficulty: 'easy',
      tags: ['trigonometry', 'trigonometric-ratios', 'sin', 'cos', 'tan'],
    },
    {
      id: 'q10m-8-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Given 15 cot A = 8, find sin A and sec A.',
      solution: "Given: 15 cot A = 8\ncot A = 8/15\n\ncot A = adjacent/opposite = 8/15\nLet adjacent = 8k, opposite = 15k\n\nBy Pythagoras theorem:\nhypotenuse² = adjacent² + opposite² = (8k)² + (15k)² = 64k² + 225k² = 289k²\nhypotenuse = 17k\n\nsin A = opposite/hypotenuse = 15k/17k = 15/17\nsec A = hypotenuse/adjacent = 17k/8k = 17/8",
      difficulty: 'easy',
      tags: ['trigonometry', 'trigonometric-ratios', 'cot', 'sin', 'sec'],
    },
  ],

  'class-10-mathematics-introduction-to-trigonometry-exercise-8-2': [
    {
      id: 'q10m-8-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Evaluate the following:\n(i) sin 60° cos 30° + sin 30° cos 60°\n(ii) 2 tan² 45° + cos² 30° - sin² 60°\n(iii) cos 45°/(sec 30° + cosec 30°)\n(iv) (sin 30° + tan 45° - cosec 60°)/(sec 30° + cos 60° + cot 45°)\n(v) (5cos² 60° + 4sec² 30° - tan² 45°)/(sin² 30° + cos² 30°)',
      solution: "Using standard values:\nsin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3\nsin 45° = cos 45° = 1/√2, tan 45° = 1\nsin 60° = √3/2, cos 60° = 1/2, tan 60° = √3\n\n(i) sin 60° cos 30° + sin 30° cos 60°\n= (√3/2)(√3/2) + (1/2)(1/2)\n= 3/4 + 1/4 = 1\n\n(ii) 2 tan² 45° + cos² 30° - sin² 60°\n= 2(1)² + (√3/2)² - (√3/2)²\n= 2 + 3/4 - 3/4 = 2\n\n(iii) cos 45°/(sec 30° + cosec 30°)\n= (1/√2)/(2/√3 + 2)\n= (1/√2)/((2+2√3)/√3)\n= (1/√2) × (√3/(2+2√3))\n= √3/(√2 × 2(1+√3))\n= √3/(2√2(1+√3))\n\n(iv) (sin 30° + tan 45° - cosec 60°)/(sec 30° + cos 60° + cot 45°)\n= (1/2 + 1 - 2/√3)/(2/√3 + 1/2 + 1)\n= (3/2 - 2/√3)/(3/2 + 2/√3)\n\n(v) (5cos² 60° + 4sec² 30° - tan² 45°)/(sin² 30° + cos² 30°)\n= (5(1/4) + 4(4/3) - 1)/(1/4 + 3/4)\n= (5/4 + 16/3 - 1)/1\n= (15/12 + 64/12 - 12/12)\n= 67/12",
      difficulty: 'medium',
      tags: ['trigonometry', 'standard-angles', 'evaluation'],
    },
  ],

  'class-10-mathematics-introduction-to-trigonometry-exercise-8-3': [
    {
      id: 'q10m-8-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Express the trigonometric ratios sin A, sec A and tan A in terms of cot A.',
      solution: "We know:\ncot A = cos A/sin A\n\nsin A = 1/cosec A\ncosec² A = 1 + cot² A\ncosec A = √(1 + cot² A)\nsin A = 1/√(1 + cot² A)\n\ntan A = 1/cot A\n\nsec² A = 1 + tan² A = 1 + 1/cot² A = (cot² A + 1)/cot² A\nsec A = √(1 + cot² A)/cot A\n\nTherefore:\nsin A = 1/√(1 + cot² A)\nsec A = √(1 + cot² A)/cot A\ntan A = 1/cot A",
      difficulty: 'medium',
      tags: ['trigonometry', 'trigonometric-identities', 'cot'],
    },
    {
      id: 'q10m-8-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Write all the other trigonometric ratios of ∠A in terms of sec A.',
      solution: "Given sec A.\n\ncos A = 1/sec A\n\nsin² A + cos² A = 1\nsin² A = 1 - cos² A = 1 - 1/sec² A = (sec² A - 1)/sec² A\nsin A = √(sec² A - 1)/sec A\n\ncosec A = 1/sin A = sec A/√(sec² A - 1)\n\ntan² A = sec² A - 1\ntan A = √(sec² A - 1)\n\ncot A = 1/tan A = 1/√(sec² A - 1)\n\nTherefore:\ncos A = 1/sec A\nsin A = √(sec² A - 1)/sec A\ntan A = √(sec² A - 1)\ncot A = 1/√(sec² A - 1)\ncosec A = sec A/√(sec² A - 1)",
      difficulty: 'medium',
      tags: ['trigonometry', 'trigonometric-identities', 'sec'],
    },
    {
      id: 'q10m-8-3-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Evaluate:\n(i) sin 25° / cos 65°\n(ii) cot 25° / tan 65°\n(iii) sin 18° / cos 72°\n(iv) cos 48° - sin 42°\n(v) cosec 31° - sec 59°',
      solution: "Using complementary angle identities:\nsin(90° - θ) = cos θ, cos(90° - θ) = sin θ\ntan(90° - θ) = cot θ, cot(90° - θ) = tan θ\nsec(90° - θ) = cosec θ, cosec(90° - θ) = sec θ\n\n(i) sin 25° / cos 65° = sin 25° / sin(90°-65°) = sin 25°/sin 25° = 1\n\n(ii) cot 25° / tan 65° = cot 25° / cot(90°-65°) = cot 25°/cot 25° = 1\n\n(iii) sin 18° / cos 72° = sin 18° / sin(90°-72°) = sin 18°/sin 18° = 1\n\n(iv) cos 48° - sin 42° = sin(90°-48°) - sin 42° = sin 42° - sin 42° = 0\n\n(v) cosec 31° - sec 59° = sec(90°-31°) - sec 59° = sec 59° - sec 59° = 0",
      difficulty: 'easy',
      tags: ['trigonometry', 'complementary-angles', 'identities'],
    },
  ],

  // ----- Chapter 9: Some Applications of Trigonometry -----
  'class-10-mathematics-some-applications-of-trigonometry-exercise-9-1': [
    {
      id: 'q10m-9-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'A circus artist is climbing a 20 m long rope, which is tightly stretched and tied from the top of a vertical pole to the ground. Find the height of the pole, if the angle made by the rope with the ground level is 30°.',
      solution: "Let height of pole = h meters.\n\nsin 30° = opposite/hypotenuse = h/20\n1/2 = h/20\nh = 10 m\n\nTherefore, the height of the pole is 10 m.",
      difficulty: 'easy',
      tags: ['trigonometry', 'height-and-distances', 'applications', 'sin'],
    },
    {
      id: 'q10m-9-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'A tree breaks due to storm and the broken part bends so that the top of the tree touches the ground making an angle 30° with it. The distance between the foot of the tree to the point where the top touches the ground is 8 m. Find the height of the tree.',
      solution: "Let the broken part be BC with B being the break point.\nLet AB = height of standing part = h\nLet BC = length of broken part = x\n\nIn right triangle ABC:\ncos 30° = adjacent/hypotenuse = 8/x\n√3/2 = 8/x\nx = 16/√3 m\n\ntan 30° = opposite/adjacent = h/8\n1/√3 = h/8\nh = 8/√3 m\n\nTotal height of tree = h + x = 8/√3 + 16/√3 = 24/√3 = 8√3 m\n\nTherefore, the height of the tree is 8√3 m.",
      difficulty: 'medium',
      tags: ['trigonometry', 'height-and-distances', 'tree-problem'],
    },
    {
      id: 'q10m-9-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'A contractor plans to install two slides for the children to play in a park. For children below the age of 5 years, she prefers to have a slide whose top is at a height of 1.5 m and is inclined at an angle of 30° to the ground, whereas for elder children, she wants to have a steep slide at a height of 3 m and inclined at an angle of 60° to the ground. What should be the length of the slide in each case?',
      solution: "For younger children:\nsin 30° = height/length\n1/2 = 1.5/L₁\nL₁ = 3 m\n\nFor elder children:\nsin 60° = height/length\n√3/2 = 3/L₂\nL₂ = 6/√3 = 2√3 m\n\nTherefore, slide length for younger children = 3 m, for elder children = 2√3 m.",
      difficulty: 'easy',
      tags: ['trigonometry', 'height-and-distances', 'slides', 'real-life'],
    },
    {
      id: 'q10m-9-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is 30°. Find the height of the tower.',
      solution: "Let height of tower = h m.\n\ntan 30° = opposite/adjacent = h/30\n1/√3 = h/30\nh = 30/√3 = 10√3 m\n\nTherefore, the height of the tower is 10√3 m ≈ 17.32 m.",
      difficulty: 'easy',
      tags: ['trigonometry', 'height-and-distances', 'angle-of-elevation', 'tan'],
    },
    {
      id: 'q10m-9-1-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'A kite is flying at a height of 60 m above the ground. The string attached to the kite is temporarily tied to a point on the ground. The inclination of the string with the ground is 60°. Find the length of the string, assuming that there is no slack in the string.',
      solution: "Let length of string = L m.\n\nsin 60° = opposite/hypotenuse = 60/L\n√3/2 = 60/L\nL = 120/√3 = 40√3 m\n\nTherefore, the length of the string is 40√3 m ≈ 69.28 m.",
      difficulty: 'easy',
      tags: ['trigonometry', 'height-and-distances', 'kite', 'sin'],
    },
  ],

  // ----- Chapter 10: Circles -----
  'class-10-mathematics-circles-exercise-10-1': [
    {
      id: 'q10m-10-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'How many tangents can a circle have?',
      solution: "A circle can have infinitely many tangents. This is because at any point on the circumference of the circle, there is exactly one tangent, and there are infinitely many points on the circumference.\n\nTherefore, a circle has infinitely many tangents.",
      difficulty: 'easy',
      tags: ['circles', 'tangents', 'basic-definitions'],
    },
    {
      id: 'q10m-10-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Fill in the blanks:\n(i) A tangent to a circle intersects it in _____ point(s).\n(ii) A line intersecting a circle in two points is called a _____.\n(iii) A circle can have _____ parallel tangents at the most.\n(iv) The common point of a tangent to a circle and the circle is called _____.',
      solution: "(i) A tangent to a circle intersects it in **one** point(s).\n(ii) A line intersecting a circle in two points is called a **secant**.\n(iii) A circle can have **two** parallel tangents at the most.\n(iv) The common point of a tangent to a circle and the circle is called **point of contact**.",
      difficulty: 'easy',
      tags: ['circles', 'tangents', 'secant', 'point-of-contact'],
    },
    {
      id: 'q10m-10-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'A tangent PQ at a point P of a circle of radius 5 cm meets a line through the centre O at a point Q so that OQ = 12 cm. Find the length of PQ.',
      solution: "Given: Radius OP = 5 cm, OQ = 12 cm.\n\nBy tangent-radius theorem: OP ⟂ PQ\nSo ΔOPQ is right-angled at P.\n\nBy Pythagoras theorem:\nPQ² = OQ² - OP² = 12² - 5² = 144 - 25 = 119\nPQ = √119 cm\n\nTherefore, the length of PQ is √119 cm.",
      difficulty: 'easy',
      tags: ['circles', 'tangent-radius-theorem', 'pythagoras'],
    },
  ],

  'class-10-mathematics-circles-exercise-10-2': [
    {
      id: 'q10m-10-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'From a point Q, the length of the tangent to a circle of radius 5 cm is 12 cm. Find the distance of Q from the centre of the circle.',
      solution: "Let O be the centre, P be the point of tangency.\n\nGiven: Radius OP = 5 cm, Tangent PQ = 12 cm\n\nBy tangent-radius theorem: OP ⟂ PQ\nBy Pythagoras theorem:\nOQ² = OP² + PQ² = 5² + 12² = 25 + 144 = 169\nOQ = √169 = 13 cm\n\nTherefore, the distance of Q from the centre is 13 cm.",
      difficulty: 'easy',
      tags: ['circles', 'tangent-length', 'pythagoras'],
    },
    {
      id: 'q10m-10-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'In the given figure, if TP and TQ are the two tangents to a circle with centre O so that ∠POQ = 110°, find ∠PTQ.',
      solution: "Given: TP and TQ are tangents at points P and Q respectively.\n∠POQ = 110°\n\nBy tangent-radius theorem:\nOP ⟂ TP, so ∠OPT = 90°\nOQ ⟂ TQ, so ∠OQT = 90°\n\nIn quadrilateral OPTQ:\n∠OPT + ∠POQ + ∠OQT + ∠PTQ = 360°\n90° + 110° + 90° + ∠PTQ = 360°\n290° + ∠PTQ = 360°\n∠PTQ = 70°\n\nTherefore, ∠PTQ = 70°.",
      difficulty: 'medium',
      tags: ['circles', 'tangents', 'angle-calculation', 'quadrilateral'],
    },
    {
      id: 'q10m-10-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Prove that the tangents drawn at the ends of a diameter of a circle are parallel.',
      solution: "Let AB be a diameter of a circle with centre O.\nLet PQ and RS be tangents at points A and B respectively.\n\nWe need to prove: PQ ∥ RS.\n\nProof:\nBy tangent-radius theorem:\nOA ⟂ PQ (radius at point of contact)\nOB ⟂ RS (radius at point of contact)\n\nSince OA and OB are in the same line (AB is a diameter), ∠OAP = ∠OBR = 90°.\n\n∠OAP = 90° means PA ⟂ AB\n∠OBR = 90° means RB ⟂ AB\n\nSince both PA and RB are perpendicular to AB, they are parallel to each other.\nTherefore, PQ ∥ RS.\n\nHence proved: Tangents at the ends of a diameter are parallel.",
      difficulty: 'medium',
      tags: ['circles', 'tangents', 'parallel-lines', 'diameter'],
    },
  ],

  // ----- Chapter 11: Areas Related to Circles -----
  'class-10-mathematics-areas-related-to-circles-exercise-11-1': [
    {
      id: 'q10m-11-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Find the area of a sector of a circle with radius 6 cm if angle of the sector is 60°.',
      solution: "Given: radius r = 6 cm, θ = 60°\n\nArea of sector = (θ/360°) × πr²\n= (60°/360°) × π × 6²\n= (1/6) × π × 36\n= 6π cm²\n\nTherefore, the area of the sector is 6π cm² ≈ 18.85 cm².",
      difficulty: 'easy',
      tags: ['areas-related-to-circles', 'sector-area', 'formula'],
    },
    {
      id: 'q10m-11-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find the area of a quadrant of a circle whose circumference is 22 cm.',
      solution: "Given: Circumference = 22 cm\n2πr = 22\nr = 22/(2π) = 11/π cm\n\nArea of quadrant = (1/4) × πr²\n= (1/4) × π × (11/π)²\n= (1/4) × π × 121/π²\n= 121/(4π)\n= 121/(4 × 22/7)\n= 121 × 7/(4 × 22)\n= 847/88\n= 77/8 cm²\n\nTherefore, the area of the quadrant is 77/8 cm² ≈ 9.625 cm².",
      difficulty: 'medium',
      tags: ['areas-related-to-circles', 'quadrant', 'circumference'],
    },
    {
      id: 'q10m-11-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes.',
      solution: "The minute hand covers 360° in 60 minutes.\nIn 5 minutes, angle covered = (5/60) × 360° = 30°\n\nRadius r = 14 cm\n\nArea swept = (θ/360°) × πr²\n= (30°/360°) × π × 14²\n= (1/12) × π × 196\n= 196π/12\n= 49π/3 cm²\n\nTherefore, the area swept by the minute hand in 5 minutes is 49π/3 cm² ≈ 51.31 cm².",
      difficulty: 'easy',
      tags: ['areas-related-to-circles', 'clock-problem', 'sector-area'],
    },
    {
      id: 'q10m-11-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'The radii of two circles are 8 cm and 6 cm respectively. Find the radius of the circle having area equal to the sum of the areas of the two circles.',
      solution: "Area of first circle = π × 8² = 64π cm²\nArea of second circle = π × 6² = 36π cm²\nSum of areas = 64π + 36π = 100π cm²\n\nLet R be the radius of the new circle.\nπR² = 100π\nR² = 100\nR = 10 cm\n\nTherefore, the radius of the required circle is 10 cm.",
      difficulty: 'easy',
      tags: ['areas-related-to-circles', 'area-sum', 'circle-radius'],
    },
  ],

  // ----- Chapter 12: Surface Areas and Volumes -----
  'class-10-mathematics-surface-areas-and-volumes-exercise-12-1': [
    {
      id: 'q10m-12-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'A solid is in the shape of a cone standing on a hemisphere with both their radii being equal to 1 cm and the height of the cone is equal to its radius. Find the volume of the solid in terms of π.',
      solution: "Given: radius r = 1 cm\nHeight of cone h = r = 1 cm\n\nVolume of hemisphere = (2/3)πr³ = (2/3)π × 1³ = 2π/3 cm³\nVolume of cone = (1/3)πr²h = (1/3)π × 1² × 1 = π/3 cm³\n\nTotal volume = 2π/3 + π/3 = π cm³\n\nTherefore, the volume of the solid is π cm³.",
      difficulty: 'medium',
      tags: ['surface-areas-volumes', 'combination-solids', 'cone', 'hemisphere'],
    },
    {
      id: 'q10m-12-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of same radius. The total height of the toy is 15.5 cm. Find the total surface area of the toy.',
      solution: "Given: radius r = 3.5 cm, total height = 15.5 cm\nHeight of hemisphere = 3.5 cm\nHeight of cone = 15.5 - 3.5 = 12 cm\n\nSlant height of cone: l = √(r² + h²) = √(3.5² + 12²) = √(12.25 + 144) = √156.25 = 12.5 cm\n\nSurface area of cone (curved) = πrl = π × 3.5 × 12.5\nSurface area of hemisphere (curved) = 2πr² = 2π × 3.5²\n\nTotal surface area = πrl + 2πr²\n= π × 3.5 × 12.5 + 2π × 12.25\n= 43.75π + 24.5π\n= 68.25π cm²\n= 68.25 × 22/7 = 214.5 cm²\n\nTherefore, the total surface area is approximately 214.5 cm².",
      difficulty: 'hard',
      tags: ['surface-areas-volumes', 'toy-problem', 'cone', 'hemisphere', 'tsa'],
    },
  ],

  'class-10-mathematics-surface-areas-and-volumes-exercise-12-2': [
    {
      id: 'q10m-12-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'A solid sphere of radius r is melted and recast into the shape of a solid cone of height r. Find the radius of the base of the cone.',
      solution: "Volume of sphere = (4/3)πr³\nLet R be the radius of the cone's base.\nVolume of cone = (1/3)πR²h = (1/3)πR² × r = πR²r/3\n\nSince the sphere is melted and recast:\n(4/3)πr³ = πR²r/3\n4r² = R²\nR = 2r\n\nTherefore, the radius of the base of the cone is 2r.",
      difficulty: 'medium',
      tags: ['surface-areas-volumes', 'melting-recasting', 'sphere-to-cone'],
    },
    {
      id: 'q10m-12-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'A metallic sphere of radius 4.2 cm is melted and recast into the shape of a cylinder of radius 6 cm. Find the height of the cylinder.',
      solution: "Volume of sphere = (4/3)πr³ = (4/3)π × (4.2)³ = (4/3)π × 74.088 = 98.784π cm³\n\nLet h be the height of the cylinder.\nVolume of cylinder = πR²h = π × 6² × h = 36πh cm³\n\nSince the sphere is melted and recast:\n98.784π = 36πh\nh = 98.784/36 = 2.744 cm\n\nTherefore, the height of the cylinder is 2.744 cm ≈ 2.74 cm.",
      difficulty: 'medium',
      tags: ['surface-areas-volumes', 'melting-recasting', 'sphere-to-cylinder'],
    },
  ],

  // ----- Chapter 13: Statistics -----
  'class-10-mathematics-statistics-exercise-13-1': [
    {
      id: 'q10m-13-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'A survey was conducted by a group of students as a part of their environment awareness programme, in which they collected the following data regarding the number of plants in 20 houses in a locality. Find the mean number of plants per house.\n\nNumber of plants: 0-2, 2-4, 4-6, 6-8, 8-10, 10-12, 12-14\nNumber of houses: 1, 2, 1, 5, 6, 2, 3',
      solution: "Class interval | Frequency (f) | Midpoint (x) | fx\n0-2 | 1 | 1 | 1\n2-4 | 2 | 3 | 6\n4-6 | 1 | 5 | 5\n6-8 | 5 | 7 | 35\n8-10 | 6 | 9 | 54\n10-12 | 2 | 11 | 22\n12-14 | 3 | 13 | 39\n\nTotal: Σf = 20, Σfx = 162\n\nMean = Σfx/Σf = 162/20 = 8.1\n\nTherefore, the mean number of plants per house is 8.1.",
      difficulty: 'easy',
      tags: ['statistics', 'mean', 'grouped-data', 'direct-method'],
    },
    {
      id: 'q10m-13-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Consider the following distribution of daily wages of 50 workers of a factory.\n\nDaily wages (in ₹): 500-520, 520-540, 540-560, 560-580, 580-600\nNumber of workers: 12, 14, 8, 6, 10\n\nFind the mean daily wages of the workers using the assumed mean method.',
      solution: "Let assumed mean a = 550, class size h = 20\n\nClass | f | Midpoint x | d = x - a | u = d/h | fu\n500-520 | 12 | 510 | -40 | -2 | -24\n520-540 | 14 | 530 | -20 | -1 | -14\n540-560 | 8 | 550 | 0 | 0 | 0\n560-580 | 6 | 570 | 20 | 1 | 6\n580-600 | 10 | 590 | 40 | 2 | 20\n\nTotal: Σf = 50, Σfu = -12\n\nMean = a + h(Σfu/Σf) = 550 + 20(-12/50) = 550 - 4.8 = 545.2\n\nTherefore, the mean daily wages is ₹545.20.",
      difficulty: 'medium',
      tags: ['statistics', 'mean', 'assumed-mean-method', 'step-deviation'],
    },
  ],

  'class-10-mathematics-statistics-exercise-13-2': [
    {
      id: 'q10m-13-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'The following table shows the ages of the patients admitted in a hospital during a year:\n\nAge (in years): 5-15, 15-25, 25-35, 35-45, 45-55, 55-65\nNumber of patients: 6, 11, 21, 23, 14, 5\n\nFind the mode of the data.',
      solution: "The modal class is 35-45 (highest frequency = 23).\n\nl = 35 (lower limit of modal class)\nf₁ = 23 (frequency of modal class)\nf₀ = 21 (frequency of class before modal class)\nf₂ = 14 (frequency of class after modal class)\nh = 10 (class size)\n\nMode = l + h × (f₁ - f₀) / ((f₁ - f₀) + (f₁ - f₂))\n= 35 + 10 × (23 - 21) / ((23 - 21) + (23 - 14))\n= 35 + 10 × 2 / (2 + 9)\n= 35 + 20/11\n= 35 + 1.82\n= 36.82\n\nTherefore, the mode of the data is approximately 36.82 years.",
      difficulty: 'medium',
      tags: ['statistics', 'mode', 'grouped-data', 'modal-class'],
    },
  ],

  'class-10-mathematics-statistics-exercise-13-3': [
    {
      id: 'q10m-13-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'The following frequency distribution gives the monthly consumption of electricity of 68 consumers of a locality. Find the median of the data.\n\nMonthly consumption (in units): 65-85, 85-105, 105-125, 125-145, 145-165, 165-185, 185-205\nNumber of consumers: 4, 5, 13, 20, 14, 8, 4',
      solution: "Total frequency N = 68\nN/2 = 34\n\nThe cumulative frequency just greater than 34 is 42, so the median class is 125-145.\n\nl = 125 (lower limit of median class)\ncf = 22 (cumulative frequency of class before median class)\nf = 20 (frequency of median class)\nh = 20 (class size)\n\nMedian = l + h × ((N/2 - cf)/f)\n= 125 + 20 × ((34 - 22)/20)\n= 125 + 20 × (12/20)\n= 125 + 12\n= 137 units\n\nTherefore, the median monthly consumption is 137 units.",
      difficulty: 'medium',
      tags: ['statistics', 'median', 'grouped-data', 'cumulative-frequency'],
    },
  ],

  // ----- Chapter 14: Probability -----
  'class-10-mathematics-probability-exercise-14-1': [
    {
      id: 'q10m-14-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'A coin is tossed 200 times and head is obtained 120 times. On tossing a coin at random, what is the probability of getting a head?',
      solution: "Total number of trials = 200\nNumber of times head obtained = 120\n\nP(getting a head) = Number of favourable outcomes / Total number of trials\n= 120/200 = 3/5\n\nTherefore, the probability of getting a head is 3/5 = 0.6.",
      difficulty: 'easy',
      tags: ['probability', 'coin-toss', 'experimental-probability'],
    },
    {
      id: 'q10m-14-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'A die is thrown 100 times and the outcomes are recorded as follows: 1 appears 15 times, 2 appears 18 times, 3 appears 14 times, 4 appears 16 times, 5 appears 20 times, 6 appears 17 times. Find the probability of getting a number greater than 4.',
      solution: "Total number of trials = 100\nNumbers greater than 4 are 5 and 6.\nNumber of times 5 appears = 20\nNumber of times 6 appears = 17\nFavourable outcomes = 20 + 17 = 37\n\nP(number > 4) = 37/100\n\nTherefore, the probability of getting a number greater than 4 is 37/100 = 0.37.",
      difficulty: 'easy',
      tags: ['probability', 'die-experiment', 'favourable-outcomes'],
    },
    {
      id: 'q10m-14-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'A bag contains 3 red balls and 5 black balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red? (ii) black?',
      solution: "Total number of balls = 3 + 5 = 8\n\n(i) Number of red balls = 3\nP(red) = 3/8\n\n(ii) Number of black balls = 5\nP(black) = 5/8\n\nTherefore:\n(i) Probability of red ball = 3/8\n(ii) Probability of black ball = 5/8",
      difficulty: 'easy',
      tags: ['probability', 'balls-problem', 'basic-probability'],
    },
  ],

  'class-10-mathematics-probability-exercise-14-2': [
    {
      id: 'q10m-14-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Two customers Shyam and Ekta are visiting a particular shop in the same week (Tuesday to Saturday). Each is equally likely to visit the shop on any day as on another day. What is the probability that both will visit the shop on (i) the same day? (ii) consecutive days? (iii) different days?',
      solution: "Total number of days = 5 (Tue, Wed, Thu, Fri, Sat)\nTotal possible outcomes = 5 × 5 = 25\n\n(i) Same day: Both visit on the same day.\nFavourable outcomes = 5 (Tue-Tue, Wed-Wed, Thu-Thu, Fri-Fri, Sat-Sat)\nP(same day) = 5/25 = 1/5\n\n(ii) Consecutive days:\nFavourable pairs: (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat) + reverse = 4 + 4 = 8\nP(consecutive) = 8/25\n\n(iii) Different days:\nP(different) = 1 - P(same day) = 1 - 1/5 = 4/5\n\nTherefore:\n(i) P(same day) = 1/5\n(ii) P(consecutive days) = 8/25\n(iii) P(different days) = 4/5",
      difficulty: 'hard',
      tags: ['probability', 'shop-visit', 'same-day', 'consecutive-days'],
    },
    {
      id: 'q10m-14-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'A game consists of tossing a one rupee coin times and noting its outcome each time. Hanif wins if all the tosses give the same result i.e., three heads or three tails, and loses otherwise. Calculate the probability that Hanif will lose the game.',
      solution: "When a coin is tossed 3 times, total possible outcomes = 2³ = 8\n\nHanif wins when all tosses give same result:\n(H, H, H) or (T, T, T) → 2 favourable outcomes\n\nHanif loses otherwise: 8 - 2 = 6 favourable outcomes\n\nP(Hanif loses) = 6/8 = 3/4\n\nTherefore, the probability that Hanif loses is 3/4 = 0.75.",
      difficulty: 'medium',
      tags: ['probability', 'coin-toss', 'game-problem', 'multiple-tosses'],
    },
  ],

  // ----- Class 10 Science: Chemical Reactions and Equations -----
  'class-10-science-chemical-reactions-and-equations-exercise-1-1': [
    {
      id: 'q10s-1-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Which of the statements about the reaction below are incorrect?\n2PbO(s) + C(s) → 2Pb(s) + CO₂(g)\n(a) Lead is being reduced\n(b) Carbon dioxide is being oxidised\n(c) Carbon is being oxidised\n(d) Lead oxide is being reduced\n(i) (a) and (b) (ii) (a) and (c) (iii) (a), (b) and (c) (iv) all',
      solution: "In the reaction 2PbO(s) + C(s) → 2Pb(s) + CO₂(g):\n- Pb in PbO goes from +2 to 0 (reduction) → statements (a) and (d) are correct\n- C goes from 0 to +4 in CO₂ (oxidation) → statement (c) is correct\n- CO₂ is the product, not a reactant being oxidised → statement (b) is incorrect\n\nTherefore, statements (a), (b) and (c) are NOT all correct.\nOnly statement (b) is incorrect among the options.\nAnswer: (i) (a) and (b)",
      difficulty: 'medium',
      tags: ['science', 'chemistry', 'redox', 'oxidation-reduction'],
    },
    {
      id: 'q10s-1-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Fe₂O₃ + 2Al → Al₂O₃ + 2Fe\nThe above reaction is an example of:\n(a) Combination reaction\n(b) Double displacement reaction\n(c) Decomposition reaction\n(d) Displacement reaction',
      solution: "In this reaction, Aluminium (Al) displaces Iron (Fe) from its oxide (Fe₂O₃).\n\nA displacement reaction is one where a more reactive element displaces a less reactive element from its compound.\n\nHere, Al is more reactive than Fe, so Al displaces Fe from Fe₂O₃.\n\nAnswer: (d) Displacement reaction\n\nThis is also an example of a thermite reaction, used for welding railway tracks.",
      difficulty: 'easy',
      tags: ['science', 'chemistry', 'displacement-reaction', 'thermite'],
    },
    {
      id: 'q10s-1-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'What happens when dilute hydrochloric acid is added to iron filings? Write the chemical equation for the reaction.',
      solution: "When dilute hydrochloric acid (HCl) is added to iron filings (Fe), iron reacts with the acid to produce iron(II) chloride and hydrogen gas.\n\nChemical equation:\nFe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)\n\nObservation:\n- Bubbles of hydrogen gas are evolved\n- The solution turns light green (colour of FeCl₂)\n- Iron filings gradually dissolve",
      difficulty: 'easy',
      tags: ['science', 'chemistry', 'acid-metal-reaction', 'hydrogen-gas'],
    },
    {
      id: 'q10s-1-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'What is a balanced chemical equation? Why should chemical equations be balanced?',
      solution: "A balanced chemical equation is one in which the number of atoms of each element on the reactants side is equal to the number of atoms of that element on the products side.\n\nChemical equations should be balanced because:\n1. Law of Conservation of Mass: Matter can neither be created nor destroyed\n2. The total mass of reactants must equal the total mass of products\n3. Atoms are rearranged in a chemical reaction, not created or destroyed\n\nThis ensures that the equation correctly represents what happens in the reaction.",
      difficulty: 'easy',
      tags: ['science', 'chemistry', 'balanced-equation', 'conservation-of-mass'],
    },
    {
      id: 'q10s-1-1-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'Write a balanced chemical equation for the following:\n(a) Hydrogen + Chlorine → Hydrogen chloride\n(b) Barium chloride + Aluminium sulphate → Barium sulphate + Aluminium chloride\n(c) Sodium + Water → Sodium hydroxide + Hydrogen',
      solution: "(a) H₂ + Cl₂ → 2HCl\n\n(b) 3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄ + 2AlCl₃\n\n(c) 2Na + 2H₂O → 2NaOH + H₂\n\nThese equations are balanced with equal numbers of atoms of each element on both sides.",
      difficulty: 'medium',
      tags: ['science', 'chemistry', 'balanced-equation', 'chemical-reactions'],
    },
  ],

  'class-10-science-chemical-reactions-and-equations-exercise-1-2': [
    {
      id: 'q10s-1-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'A solution of a substance X is used for whitewashing. Name the substance X and write its formula. Write the chemical reaction that takes place when X is exposed to air.',
      solution: "Substance X is Calcium oxide (Quicklime).\nFormula: CaO\n\nWhen CaO is exposed to air, it reacts with water vapour and carbon dioxide:\n\nStep 1: CaO + H₂O → Ca(OH)₂ (Calcium hydroxide / Slaked lime)\nThis is an exothermic reaction producing slaked lime used for whitewashing.\n\nStep 2: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O\nThe Ca(OH)₂ reacts slowly with CO₂ in the air to form a hard layer of calcium carbonate, which gives the whitewashed surface its shine and durability.",
      difficulty: 'medium',
      tags: ['science', 'chemistry', 'whitewashing', 'calcium-oxide', 'calcium-carbonate'],
    },
    {
      id: 'q10s-1-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Write the balanced chemical equations for the following reactions:\n(a) Calcium hydroxide + Carbon dioxide → Calcium carbonate + Water\n(b) Zinc + Silver nitrate → Zinc nitrate + Silver\n(c) Aluminium + Copper chloride → Aluminium chloride + Copper\n(d) Barium chloride + Potassium sulphate → Barium sulphate + Potassium chloride',
      solution: "(a) Ca(OH)₂ + CO₂ → CaCO₃ + H₂O (already balanced)\n\n(b) Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag\n\n(c) 2Al + 3CuCl₂ → 2AlCl₃ + 3Cu\n\n(d) BaCl₂ + K₂SO₄ → BaSO₄ + 2KCl",
      difficulty: 'easy',
      tags: ['science', 'chemistry', 'balanced-equation', 'displacement-reactions'],
    },
    {
      id: 'q10s-1-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'What is the difference between displacement and double displacement reactions? Write equations for these reactions.',
      solution: "Displacement Reaction: A more reactive element displaces a less reactive element from its compound.\nExample: Fe + CuSO₄ → FeSO₄ + Cu\n(Iron displaces copper from copper sulphate)\n\nDouble Displacement Reaction: Two compounds exchange their ions to form two new compounds.\nExample: Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl\n(Sodium sulphate and barium chloride exchange ions)\n\nKey difference:\n- Displacement: One element replaces another (A + BC → AC + B)\n- Double displacement: Two compounds exchange partners (AB + CD → AD + CB)",
      difficulty: 'medium',
      tags: ['science', 'chemistry', 'displacement', 'double-displacement', 'reaction-types'],
    },
    {
      id: 'q10s-1-2-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'What are oxidation and reduction reactions? Identify the substance oxidised and reduced in the following reaction:\nMnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂',
      solution: "Oxidation: Addition of oxygen (or removal of hydrogen) from a substance.\nReduction: Addition of hydrogen (or removal of oxygen) from a substance.\n\nIn the reaction MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂:\n\nOxidation: HCl is oxidised to Cl₂ (chlorine goes from -1 to 0)\n- Cl⁻ loses electrons to form Cl₂\n\nReduction: MnO₂ is reduced to MnCl₂ (manganese goes from +4 to +2)\n- Mn⁴⁺ gains 2 electrons to become Mn²⁺\n\nTherefore:\nSubstance oxidised: HCl (or Cl⁻ ions)\nSubstance reduced: MnO₂ (or Mn⁴⁺ ions)",
      difficulty: 'hard',
      tags: ['science', 'chemistry', 'oxidation', 'reduction', 'redox'],
    },
    {
      id: 'q10s-1-2-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'Why is respiration considered an exothermic reaction? Explain.',
      solution: "Respiration is an exothermic reaction because it releases energy in the form of heat.\n\nDuring respiration, glucose (C₆H₁₂O₆) reacts with oxygen to produce carbon dioxide, water, and energy.\n\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy\n\nPlants and animals use this released energy for various life processes like growth, movement, and maintaining body temperature. The reaction breaks the chemical bonds in glucose, releasing energy that was stored in those bonds.",
      difficulty: 'easy',
      tags: ['science', 'chemistry', 'respiration', 'exothermic', 'energy-released'],
    },
  ],


  // =====================================================================
  // Class 9 Mathematics - New NCERT 2026-27 Syllabus
  // Questions based on standard NCERT Class 9 Mathematics textbook
  // =====================================================================

  // ----- Class 9 Mathematics: Chapter 1 - Orienting Yourself (Coordinate Geometry) -----
  // Based on NCERT Chapter 3: Coordinate Geometry

  'class-9-mathematics-orienting-yourself-the-use-of-coordinates-exercise-1-1': [
    {
      id: 'q9m-1-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'How will you describe the position of a table lamp on your study table to another person?',
      solution: "To describe the position of a table lamp on a study table, we take two lines, a perpendicular pair.\n\nLet us take the table as a plane and take two perpendicular lines as guides. Take one edge of the table as x-axis and the adjacent edge as y-axis.\n\nMeasure the distance of the lamp from the x-axis (say 30 cm) and from the y-axis (say 20 cm).\n\nThus, the position of the lamp can be described as (20, 30) where 20 is the perpendicular distance from y-axis and 30 is the perpendicular distance from x-axis.",
      difficulty: 'easy',
      tags: ['mathematics', 'coordinate-geometry', 'position', 'cartesian-system'],
    },
    {
      id: 'q9m-1-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: '(Street Plan): A city has two main roads which cross each other at the centre of the city. These two roads are along the North-South direction and East-West direction. All other streets of the city run parallel to these roads and are 200 m apart. There are 5 streets in each direction. Using 1 cm = 200 m, draw a model of the city on your notebook. Represent the roads/streets by single lines.\n\nThere are many cross-streets in your model. A particular cross-street is made by two streets, one running in the North-South direction and another in the East-West direction. Each cross-street is referred to in the following manner: If the 2nd street running in the N-S direction and 5th street running in the E-W direction meet at some crossing, then we will call this cross-street (2, 5). Using this convention, find:\n(i) How many cross-streets can be referred to as (4, 3)?\n(ii) How many cross-streets can be referred to as (3, 4)?',
      solution: "(i) Only one cross-street can be referred to as (4, 3) \u2014 the one where the 4th N-S street meets the 3rd E-W street.\n\n(ii) Only one cross-street can be referred to as (3, 4) \u2014 the one where the 3rd N-S street meets the 4th E-W street.\n\nNote: Both (4, 3) and (3, 4) represent different cross-streets since the order matters, just like in coordinate geometry where (x, y) and (y, x) are different points (unless x = y).",
      difficulty: 'easy',
      tags: ['mathematics', 'coordinate-geometry', 'street-plan', 'ordered-pair'],
    },
    {
      id: 'q9m-1-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Write the coordinates of the points A, B, C, D, E, F, G, H shown in the figure.\n[Typical NCERT graph: A(2,3), B(-3,2), C(-4,-3), D(3,-2), E(0,4), F(-5,0), G(4,0), H(0,-3)]',
      solution: "Based on a standard Cartesian plane:\n\nA(2, 3): x = 2, y = 3 \u2192 Quadrant I\nB(-3, 2): x = -3, y = 2 \u2192 Quadrant II\nC(-4, -3): x = -4, y = -3 \u2192 Quadrant III\nD(3, -2): x = 3, y = -2 \u2192 Quadrant IV\nE(0, 4): x = 0, y = 4 \u2192 On positive y-axis\nF(-5, 0): x = -5, y = 0 \u2192 On negative x-axis\nG(4, 0): x = 4, y = 0 \u2192 On positive x-axis\nH(0, -3): x = 0, y = -3 \u2192 On negative y-axis",
      difficulty: 'easy',
      tags: ['mathematics', 'coordinate-geometry', 'reading-coordinates', 'graph'],
    },
  ],

  'class-9-mathematics-orienting-yourself-the-use-of-coordinates-exercise-1-2': [
    {
      id: 'q9m-1-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Write the answer of each of the following questions:\n(i) What is the name of the horizontal and vertical lines drawn to determine the position of any point in the Cartesian plane?\n(ii) What is the name of each part of the plane formed by these two lines?\n(iii) Write the name of the point where these two lines intersect.',
      solution: "(i) The horizontal line is called the x-axis and the vertical line is called the y-axis.\n\n(ii) Each part of the plane formed by these two lines (x-axis and y-axis) is called a quadrant. There are four quadrants.\n\n(iii) The point where these two lines intersect is called the origin (O). Its coordinates are (0, 0).",
      difficulty: 'easy',
      tags: ['mathematics', 'coordinate-geometry', 'axes', 'origin', 'quadrants'],
    },
    {
      id: 'q9m-1-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Plot the following points (x, y) given in the following table on the plane, choosing suitable units of distance on the axes.\n\nx \u2192 -2, -1, 0, 1, 3\ny \u2192 8, 7, -1.25, 3, -1',
      solution: "Choose a suitable scale. Since y-values range from -1.25 to 8, take 1 cm = 1 unit on both axes.\n\n(-2, 8): 2 units left on x-axis, then 8 units up\n(-1, 7): 1 unit left, then 7 units up\n(0, -1.25): At origin on x-axis, 1.25 units down\n(1, 3): 1 unit right, then 3 units up\n(3, -1): 3 units right, then 1 unit down\n\n[Plot these points on graph paper by drawing perpendicular lines from the respective x and y coordinates.]",
      difficulty: 'medium',
      tags: ['mathematics', 'coordinate-geometry', 'plotting-points', 'graph-scale'],
    },
  ],

  'class-9-mathematics-orienting-yourself-the-use-of-coordinates-exercise-1-3': [
    {
      id: 'q9m-1-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'In which quadrant or on which axis do each of the following points lie?\n(-2, 4), (3, -1), (-1, 0), (1, 2), (-3, -5)\n\nVerify your answer by locating them on the Cartesian plane.',
      solution: "Using the sign convention:\nQuadrant I: (+, +) | Quadrant II: (-, +) | Quadrant III: (-, -) | Quadrant IV: (+, -)\nOn x-axis: (x, 0) | On y-axis: (0, y)\n\n(-2, 4): x < 0, y > 0 \u2192 Quadrant II\n(3, -1): x > 0, y < 0 \u2192 Quadrant IV\n(-1, 0): y = 0 \u2192 On negative x-axis\n(1, 2): x > 0, y > 0 \u2192 Quadrant I\n(-3, -5): x < 0, y < 0 \u2192 Quadrant III\n\n[Plot each point on a Cartesian plane to verify. Draw perpendiculars from the x and y coordinates - their intersection is the point.]",
      difficulty: 'easy',
      tags: ['mathematics', 'coordinate-geometry', 'quadrants', 'sign-convention', 'verification'],
    },
    {
      id: 'q9m-1-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Plot the points (x, y) given in the following table on the plane, choosing suitable units of distance on the axes.\n\n   x    \u2192  -2,  -1,   0,   1,   3\n   y    \u2192   8,   7,  -1.25, 3,  -1',
      solution: "Take 1 cm = 1 unit on both axes.\n\n(-2, 8): 2 units left, 8 units up\n(-1, 7): 1 unit left, 7 units up\n(0, -1.25): at x=0, 1.25 units down (between -1 and -2)\n(1, 3): 1 unit right, 3 units up\n(3, -1): 3 units right, 1 unit down\n\nMark each point on graph paper by drawing perpendicular lines from the respective x and y coordinates.",
      difficulty: 'medium',
      tags: ['mathematics', 'coordinate-geometry', 'plotting-points', 'table-of-values'],
    },
  ],

  // ----- Class 9 Mathematics: Chapter 2 - Introduction to Linear Polynomials -----
  // Based on NCERT Chapter 2: Polynomials (Ex 2.1, 2.2)

  'class-9-mathematics-introduction-to-linear-polynomials-exercise-2-1': [
    {
      id: 'q9m-2-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Which of the following expressions are polynomials in one variable and which are not? State reasons for your answer.\n(i) 4x\u00b2 - 3x + 7\n(ii) y\u00b2 + \u221a2\n(iii) 3\u221at + t\u221a2\n(iv) y + 2/y\n(v) x\u00b9\u2070 + y\u00b3 + t\u2075\u2070',
      solution: "A polynomial in one variable is an expression in which the variable has only non-negative integer exponents.\n\n(i) 4x\u00b2 - 3x + 7: Only variable x, all exponents are whole numbers \u2192 Polynomial in one variable\n(ii) y\u00b2 + \u221a2: Only variable y, exponents are whole numbers \u2192 Polynomial in one variable\n(iii) 3\u221at + t\u221a2 = 3t^(1/2) + t\u221a2: Exponent 1/2 is not an integer \u2192 Not a polynomial\n(iv) y + 2/y = y + 2y^(-1): Exponent -1 is negative \u2192 Not a polynomial\n(v) x\u00b9\u2070 + y\u00b3 + t\u2075\u2070: Three variables x, y, t \u2192 Polynomial in three variables, not one variable",
      difficulty: 'easy',
      tags: ['mathematics', 'polynomials', 'definition', 'one-variable'],
    },
    {
      id: 'q9m-2-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Write the coefficients of x\u00b2 in each of the following:\n(i) 2 + x\u00b2 + x\n(ii) 2 - x\u00b2 + x\u00b3\n(iii) (\u03c0/2)x\u00b2 + x\n(iv) \u221a2x - 1',
      solution: "The coefficient of x\u00b2 is the number (including sign) that multiplies x\u00b2.\n\n(i) 2 + x\u00b2 + x = 2 + 1\u00b7x\u00b2 + x \u2192 Coefficient of x\u00b2 = 1\n(ii) 2 - x\u00b2 + x\u00b3 = 2 + (-1)x\u00b2 + x\u00b3 \u2192 Coefficient of x\u00b2 = -1\n(iii) (\u03c0/2)x\u00b2 + x \u2192 Coefficient of x\u00b2 = \u03c0/2\n(iv) \u221a2x - 1 = \u221a2x - 1 = 0\u00b7x\u00b2 + \u221a2x - 1 \u2192 Coefficient of x\u00b2 = 0",
      difficulty: 'easy',
      tags: ['mathematics', 'polynomials', 'coefficients', 'identification'],
    },
    {
      id: 'q9m-2-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Give one example each of a binomial of degree 35, and of a monomial of degree 100.',
      solution: "A binomial has exactly two terms. A monomial has exactly one term. The degree is the highest exponent of the variable.\n\nBinomial of degree 35: x\u00b3\u2075 + 1 (two terms, highest exponent = 35)\nOther examples: 3x\u00b3\u2075 - 5, x\u00b3\u2075 + 7x, etc.\n\nMonomial of degree 100: x\u00b9\u2070\u2070 (one term, exponent = 100)\nOther examples: 5x\u00b9\u2070\u2070, -3x\u00b9\u2070\u2070, etc.",
      difficulty: 'easy',
      tags: ['mathematics', 'polynomials', 'binomial', 'monomial', 'degree'],
    },
    {
      id: 'q9m-2-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Write the degree of each of the following polynomials:\n(i) 5x\u00b3 + 4x\u00b2 + 7x\n(ii) 4 - y\u00b2\n(iii) 5t - \u221a7\n(iv) 3',
      solution: "The degree of a polynomial is the highest power of the variable.\n\n(i) 5x\u00b3 + 4x\u00b2 + 7x: Highest power = 3 \u2192 Degree 3\n(ii) 4 - y\u00b2: Highest power = 2 \u2192 Degree 2\n(iii) 5t - \u221a7: Highest power = 1 \u2192 Degree 1\n(iv) 3: Constant term (3 = 3x\u2070) \u2192 Degree 0",
      difficulty: 'easy',
      tags: ['mathematics', 'polynomials', 'degree', 'classification'],
    },
    {
      id: 'q9m-2-1-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'Classify the following as linear, quadratic and cubic polynomials:\n(i) x\u00b2 + x\n(ii) x - x\u00b3\n(iii) y + y\u00b2 + 4\n(iv) 1 + x\n(v) 3t\n(vi) r\u00b2\n(vii) 7x\u00b3',
      solution: "Linear: degree = 1 | Quadratic: degree = 2 | Cubic: degree = 3\n\n(i) x\u00b2 + x: degree 2 \u2192 Quadratic\n(ii) x - x\u00b3: degree 3 \u2192 Cubic\n(iii) y + y\u00b2 + 4: degree 2 \u2192 Quadratic\n(iv) 1 + x: degree 1 \u2192 Linear\n(v) 3t: degree 1 \u2192 Linear\n(vi) r\u00b2: degree 2 \u2192 Quadratic\n(vii) 7x\u00b3: degree 3 \u2192 Cubic",
      difficulty: 'easy',
      tags: ['mathematics', 'polynomials', 'linear', 'quadratic', 'cubic', 'classification'],
    },
  ],

  'class-9-mathematics-introduction-to-linear-polynomials-exercise-2-2': [
    {
      id: 'q9m-2-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Find the value of the polynomial 5x - 4x\u00b2 + 3 at:\n(i) x = 0\n(ii) x = -1\n(iii) x = 2',
      solution: "p(x) = 5x - 4x\u00b2 + 3\n\n(i) p(0) = 5(0) - 4(0)\u00b2 + 3 = 0 - 0 + 3 = 3\n\n(ii) p(-1) = 5(-1) - 4(-1)\u00b2 + 3 = -5 - 4(1) + 3 = -5 - 4 + 3 = -6\n\n(iii) p(2) = 5(2) - 4(2)\u00b2 + 3 = 10 - 4(4) + 3 = 10 - 16 + 3 = -3",
      difficulty: 'easy',
      tags: ['mathematics', 'polynomials', 'evaluation', 'substitution'],
    },
    {
      id: 'q9m-2-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find p(0), p(1) and p(2) for each of the following polynomials:\n(i) p(y) = y\u00b2 - y + 1\n(ii) p(t) = 2 + t + 2t\u00b2 - t\u00b3\n(iii) p(x) = x\u00b3\n(iv) p(x) = (x - 1)(x + 1)',
      solution: "(i) p(y) = y\u00b2 - y + 1\np(0) = 0 - 0 + 1 = 1\np(1) = 1 - 1 + 1 = 1\np(2) = 4 - 2 + 1 = 3\n\n(ii) p(t) = 2 + t + 2t\u00b2 - t\u00b3\np(0) = 2 + 0 + 0 - 0 = 2\np(1) = 2 + 1 + 2 - 1 = 4\np(2) = 2 + 2 + 8 - 8 = 4\n\n(iii) p(x) = x\u00b3\np(0) = 0\np(1) = 1\np(2) = 8\n\n(iv) p(x) = (x - 1)(x + 1) = x\u00b2 - 1\np(0) = -1\np(1) = 0\np(2) = 4 - 1 = 3",
      difficulty: 'easy',
      tags: ['mathematics', 'polynomials', 'evaluation', 'substitution'],
    },
    {
      id: 'q9m-2-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Verify whether the following are zeroes of the polynomial, indicated against them.\n(i) p(x) = 3x + 1, x = -1/3\n(ii) p(x) = 5x - \u03c0, x = 4/5\n(iii) p(x) = x\u00b2 - 1, x = 1, -1\n(iv) p(x) = (x + 1)(x - 2), x = -1, 2\n(v) p(x) = x\u00b2, x = 0\n(vi) p(x) = lx + m, x = -m/l\n(vii) p(x) = 3x\u00b2 - 1, x = -1/\u221a3, 2/\u221a3\n(viii) p(x) = 2x + 1, x = 1/2',
      solution: "A value is a zero if p(value) = 0.\n\n(i) p(-1/3) = 3(-1/3) + 1 = -1 + 1 = 0 \u2192 Yes, -1/3 is a zero\n(ii) p(4/5) = 5(4/5) - \u03c0 = 4 - \u03c0 \u2260 0 \u2192 No, 4/5 is not a zero\n(iii) p(1) = 1 - 1 = 0 \u2192 Yes; p(-1) = 1 - 1 = 0 \u2192 Yes\n(iv) p(-1) = 0(-3) = 0 \u2192 Yes; p(2) = 3(0) = 0 \u2192 Yes\n(v) p(0) = 0 \u2192 Yes, 0 is a zero\n(vi) p(-m/l) = l(-m/l) + m = -m + m = 0 \u2192 Yes\n(vii) p(-1/\u221a3) = 3(1/3) - 1 = 0 \u2192 Yes; p(2/\u221a3) = 3(4/3) - 1 = 4 - 1 = 3 \u2260 0 \u2192 No\n(viii) p(1/2) = 2(1/2) + 1 = 1 + 1 = 2 \u2260 0 \u2192 No",
      difficulty: 'medium',
      tags: ['mathematics', 'polynomials', 'zeroes', 'verification'],
    },
    {
      id: 'q9m-2-2-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Find the zero of the polynomial in each of the following cases:\n(i) p(x) = x + 5\n(ii) p(x) = x - 5\n(iii) p(x) = 2x + 5\n(iv) p(x) = 3x - 2\n(v) p(x) = 3x\n(vi) p(x) = ax, a \u2260 0\n(vii) p(x) = cx + d, c \u2260 0',
      solution: "For a linear polynomial ax + b, zero = -b/a.\n\n(i) x + 5 = 0 \u2192 x = -5\n(ii) x - 5 = 0 \u2192 x = 5\n(iii) 2x + 5 = 0 \u2192 x = -5/2\n(iv) 3x - 2 = 0 \u2192 x = 2/3\n(v) 3x = 0 \u2192 x = 0\n(vi) ax = 0, a \u2260 0 \u2192 x = 0\n(vii) cx + d = 0, c \u2260 0 \u2192 x = -d/c",
      difficulty: 'easy',
      tags: ['mathematics', 'polynomials', 'zero-of-polynomial', 'linear-polynomial'],
    },
  ],

  // ----- Class 9 Mathematics: Chapter 3 - The World of Numbers -----
  // Based on NCERT Chapter 1: Number Systems

  'class-9-mathematics-the-world-of-numbers-exercise-3-1': [
    {
      id: 'q9m-3-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Is zero a rational number? Can you write it in the form p/q, where p and q are integers and q \u2260 0?',
      solution: "Yes, zero is a rational number.\n\nA rational number is a number that can be written in the form p/q, where p and q are integers and q \u2260 0.\n\nZero can be written as 0/1, 0/2, 0/3, 0/(-1), etc.\n\nFor example: 0 = 0/1 (here p = 0, q = 1)\n\nSince p = 0 is an integer and q = 1 \u2260 0 is an integer, zero satisfies the definition of a rational number.",
      difficulty: 'easy',
      tags: ['mathematics', 'number-systems', 'rational-numbers', 'zero'],
    },
    {
      id: 'q9m-3-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find six rational numbers between 3 and 4.',
      solution: "We know 3 and 4 are rational numbers.\n\nWrite 3 = 21/7 and 4 = 28/7.\n\nSix rational numbers between them are:\n22/7, 23/7, 24/7, 25/7, 26/7, 27/7\n\nAlternatively:\n3 = 30/10 and 4 = 40/10\nRational numbers: 31/10, 32/10, 33/10, 34/10, 35/10, 36/10\n= 3.1, 3.2, 3.3, 3.4, 3.5, 3.6\n\nTherefore, six rational numbers between 3 and 4 are:\n22/7, 23/7, 24/7, 25/7, 26/7, 27/7",
      difficulty: 'easy',
      tags: ['mathematics', 'number-systems', 'rational-numbers', 'between-numbers'],
    },
    {
      id: 'q9m-3-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Find five rational numbers between 3/5 and 4/5.',
      solution: "We need numbers between 3/5 = 0.6 and 4/5 = 0.8.\n\nMethod: Multiply numerator and denominator by (n+1) = 6.\n3/5 = 18/30 and 4/5 = 24/30\n\nFive rational numbers between them:\n19/30, 20/30, 21/30, 22/30, 23/30\n\nSimplifying: 19/30, 2/3, 7/10, 11/15, 23/30\n\nTherefore, five rational numbers between 3/5 and 4/5 are:\n19/30, 2/3, 7/10, 11/15, 23/30",
      difficulty: 'easy',
      tags: ['mathematics', 'number-systems', 'rational-numbers', 'between-fractions'],
    },
    {
      id: 'q9m-3-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'State whether the following statements are true or false. Give reasons for your answers.\n(i) Every natural number is a whole number.\n(ii) Every integer is a whole number.\n(iii) Every rational number is a whole number.',
      solution: "(i) True. Natural numbers = {1, 2, 3, ...}. Whole numbers = {0, 1, 2, 3, ...}. Every natural number is included in whole numbers.\n\n(ii) False. Integers = {..., -3, -2, -1, 0, 1, 2, 3, ...}. Whole numbers = {0, 1, 2, 3, ...}. Negative integers like -1, -2, -3 are not whole numbers.\n\n(iii) False. Rational numbers include fractions like 1/2, 3/4, etc. which are not whole numbers. For example, 1/2 is a rational number but not a whole number.",
      difficulty: 'easy',
      tags: ['mathematics', 'number-systems', 'number-classification', 'natural', 'whole', 'rational'],
    },
  ],

  'class-9-mathematics-the-world-of-numbers-exercise-3-2': [
    {
      id: 'q9m-3-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'State whether the following statements are true or false. Justify your answers.\n(i) Every irrational number is a real number.\n(ii) Every point on the number line is of the form \u221am, where m is a natural number.\n(iii) Every real number is an irrational number.',
      solution: "(i) True. Real numbers include both rational and irrational numbers. Every irrational number is a subset of real numbers.\n\n(ii) False. Points on the number line represent all real numbers. For example, 2/3 is a rational number (not of the form \u221am) and lies on the number line. Also, negative numbers are not of the form \u221am (since m is natural, \u221am \u2265 0).\n\n(iii) False. Real numbers include both rational and irrational numbers. For example, 2, 3/4, 0.5 are real numbers but they are rational, not irrational.",
      difficulty: 'easy',
      tags: ['mathematics', 'number-systems', 'real-numbers', 'irrational', 'number-line'],
    },
    {
      id: 'q9m-3-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Are the square roots of all positive integers irrational? If not, give an example of the square root of a number that is a rational number.',
      solution: "No, the square roots of all positive integers are not irrational.\n\nFor example:\n\u221a1 = 1 (rational)\n\u221a4 = 2 (rational)\n\u221a9 = 3 (rational)\n\u221a16 = 4 (rational)\n\nThese are perfect squares whose square roots are integers, hence rational.\n\nHowever, numbers like \u221a2, \u221a3, \u221a5, \u221a7 are irrational because they cannot be expressed as p/q.\n\nSo square roots of positive integers that are perfect squares are rational; others are irrational.",
      difficulty: 'easy',
      tags: ['mathematics', 'number-systems', 'square-roots', 'irrational', 'perfect-squares'],
    },
    {
      id: 'q9m-3-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Show how \u221a5 can be represented on the number line.',
      solution: "To represent \u221a5 on a number line:\n\n1. Draw a number line and mark point O at 0 and A at 2.\n2. Draw AB \u22a5 OA at A with AB = 1 unit.\n3. Join OB. By Pythagoras theorem:\n   OB\u00b2 = OA\u00b2 + AB\u00b2 = 2\u00b2 + 1\u00b2 = 4 + 1 = 5\n   So OB = \u221a5\n4. With O as centre and OB as radius, draw an arc to intersect the number line at point P.\n5. Point P represents \u221a5 on the number line.\n\n[This construction uses the fact that in a right triangle with legs 2 and 1, the hypotenuse is \u221a5.]",
      difficulty: 'medium',
      tags: ['mathematics', 'number-systems', 'square-root', 'number-line', 'geometric-construction'],
    },
  ],

  'class-9-mathematics-the-world-of-numbers-exercise-3-3': [
    {
      id: 'q9m-3-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Write the following in decimal form and say what kind of decimal expansion each has:\n(i) 36/100\n(ii) 1/11\n(iii) 4\u00b9/\u2088\n(iv) 3/13\n(v) 2/11\n(vi) 329/400',
      solution: "(i) 36/100 = 0.36 \u2192 Terminating decimal\n(ii) 1/11 = 0.090909... = 0.09 (bar on 09) \u2192 Non-terminating repeating decimal\n(iii) 4\u00b9/\u2088 = 33/8 = 4.125 \u2192 Terminating decimal\n(iv) 3/13 = 0.230769230769... = 0.230769 (bar on 230769) \u2192 Non-terminating repeating\n(v) 2/11 = 0.181818... = 0.18 (bar on 18) \u2192 Non-terminating repeating\n(vi) 329/400 = 0.8225 \u2192 Terminating decimal",
      difficulty: 'easy',
      tags: ['mathematics', 'number-systems', 'decimal-expansion', 'terminating', 'repeating'],
    },
    {
      id: 'q9m-3-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'You know that 1/7 = 0.142857 (bar on 142857). Can you predict the decimal expansions of 2/7, 3/7, 4/7, 5/7, 6/7 without actually doing the long division? If so, how?',
      solution: "Yes, we can predict.\n\nGiven: 1/7 = 0.142857142857... = 0.142857 (repeating block of 6 digits)\n\n2/7 = 2 \u00d7 1/7 = 2 \u00d7 0.142857... = 0.285714... = 0.285714 (bar on 285714)\n3/7 = 3 \u00d7 1/7 = 0.428571... = 0.428571 (bar on 428571)\n4/7 = 4 \u00d7 1/7 = 0.571428... = 0.571428 (bar on 571428)\n5/7 = 5 \u00d7 1/7 = 0.714285... = 0.714285 (bar on 714285)\n6/7 = 6 \u00d7 1/7 = 0.857142... = 0.857142 (bar on 857142)\n\nPattern: The repeating block cycles through the same digits in order.",
      difficulty: 'medium',
      tags: ['mathematics', 'number-systems', 'decimal-expansion', 'prediction', 'pattern'],
    },
    {
      id: 'q9m-3-3-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Express the following in the form p/q, where p and q are integers and q \u2260 0.\n(i) 0.6 (bar on 6)\n(ii) 0.47 (bar on 47)\n(iii) 0.001 (bar on 001)',
      solution: "(i) Let x = 0.6666...\n10x = 6.6666...\n10x - x = 6.666... - 0.666...\n9x = 6\nx = 6/9 = 2/3\n\n(ii) Let x = 0.474747...\n100x = 47.474747...\n100x - x = 47.474... - 0.474...\n99x = 47\nx = 47/99\n\n(iii) Let x = 0.001001001...\n1000x = 1.001001001...\n1000x - x = 1.001... - 0.001...\n999x = 1\nx = 1/999",
      difficulty: 'medium',
      tags: ['mathematics', 'number-systems', 'recurring-decimals', 'p-over-q'],
    },
  ],

  // ----- Class 9 Mathematics: Chapter 4 - Exploring Algebraic Identities -----
  // Based on NCERT Chapter 2: Polynomials (Ex 2.3, 2.4, 2.5)

  'class-9-mathematics-exploring-algebraic-identities-exercise-4-1': [
    {
      id: 'q9m-4-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Find the remainder when x\u00b3 + 3x\u00b2 + 3x + 1 is divided by\n(i) x + 1\n(ii) x - 1/2\n(iii) x\n(iv) x + \u03c0\n(v) 5 + 2x',
      solution: "Using Remainder Theorem: When p(x) is divided by (x - a), remainder = p(a).\n\np(x) = x\u00b3 + 3x\u00b2 + 3x + 1\n\n(i) Divisor x + 1 = x - (-1), so a = -1\np(-1) = (-1)\u00b3 + 3(-1)\u00b2 + 3(-1) + 1 = -1 + 3 - 3 + 1 = 0\n\n(ii) Divisor x - 1/2, so a = 1/2\np(1/2) = (1/2)\u00b3 + 3(1/2)\u00b2 + 3(1/2) + 1 = 1/8 + 3/4 + 3/2 + 1 = 1/8 + 6/8 + 12/8 + 8/8 = 27/8\n\n(iii) Divisor x = x - 0, so a = 0\np(0) = 0 + 0 + 0 + 1 = 1\n\n(iv) Divisor x + \u03c0 = x - (-\u03c0), so a = -\u03c0\np(-\u03c0) = (-\u03c0)\u00b3 + 3(-\u03c0)\u00b2 + 3(-\u03c0) + 1 = -\u03c0\u00b3 + 3\u03c0\u00b2 - 3\u03c0 + 1\n\n(v) Divisor 5 + 2x, so zero = -5/2\np(-5/2) = (-125/8) + 3(25/4) + 3(-5/2) + 1 = -125/8 + 150/8 - 60/8 + 8/8 = -27/8",
      difficulty: 'medium',
      tags: ['mathematics', 'polynomials', 'remainder-theorem', 'division'],
    },
    {
      id: 'q9m-4-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find the remainder when x\u00b3 - ax\u00b2 + 6x - a is divided by x - a.',
      solution: "Using Remainder Theorem: When p(x) = x\u00b3 - ax\u00b2 + 6x - a is divided by (x - a), remainder = p(a).\n\np(a) = a\u00b3 - a(a\u00b2) + 6(a) - a\n= a\u00b3 - a\u00b3 + 6a - a\n= 5a\n\nTherefore, the remainder is 5a.",
      difficulty: 'medium',
      tags: ['mathematics', 'polynomials', 'remainder-theorem', 'variable-coefficient'],
    },
    {
      id: 'q9m-4-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Check whether 7 + 3x is a factor of 3x\u00b3 + 7x.',
      solution: "If 7 + 3x is a factor of p(x) = 3x\u00b3 + 7x, then p(-7/3) should be 0.\n\n7 + 3x = 0 \u2192 x = -7/3\n\np(-7/3) = 3(-7/3)\u00b3 + 7(-7/3)\n= 3(-343/27) - 49/3\n= -343/9 - 49/3\n= -343/9 - 147/9\n= -490/9\n\u2260 0\n\nSince p(-7/3) \u2260 0, 7 + 3x is NOT a factor of 3x\u00b3 + 7x.",
      difficulty: 'medium',
      tags: ['mathematics', 'polynomials', 'factor-theorem', 'factor-check'],
    },
  ],

  'class-9-mathematics-exploring-algebraic-identities-exercise-4-2': [
    {
      id: 'q9m-4-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Determine which of the following polynomials has (x + 1) a factor:\n(i) x\u00b3 + x\u00b2 + x + 1\n(ii) x\u2074 + x\u00b3 + x\u00b2 + x + 1\n(iii) x\u2074 + 3x\u00b3 + 3x\u00b2 + x + 1\n(iv) x\u00b3 - x\u00b2 - (2 + \u221a2)x + \u221a2',
      solution: "Using Factor Theorem: (x + 1) is a factor if p(-1) = 0.\n\n(i) p(-1) = (-1)\u00b3 + (-1)\u00b2 + (-1) + 1 = -1 + 1 - 1 + 1 = 0 \u2192 Yes, (x+1) is a factor\n\n(ii) p(-1) = 1 - 1 + 1 - 1 + 1 = 1 \u2260 0 \u2192 No\n\n(iii) p(-1) = 1 - 3 + 3 - 1 + 1 = 1 \u2260 0 \u2192 No\n\n(iv) p(-1) = (-1)\u00b3 - (-1)\u00b2 - (2+\u221a2)(-1) + \u221a2\n= -1 - 1 + 2 + \u221a2 + \u221a2\n= 0 + 2\u221a2\n= 2\u221a2 \u2260 0 \u2192 No",
      difficulty: 'medium',
      tags: ['mathematics', 'polynomials', 'factor-theorem', 'factor-check'],
    },
    {
      id: 'q9m-4-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Use the Factor Theorem to determine whether g(x) is a factor of p(x) in each of the following cases:\n(i) p(x) = 2x\u00b3 + x\u00b2 - 2x - 1, g(x) = x + 1\n(ii) p(x) = x\u00b3 + 3x\u00b2 + 3x + 1, g(x) = x + 2\n(iii) p(x) = x\u00b3 - 4x\u00b2 + x + 6, g(x) = x - 3',
      solution: "(i) g(x) = x + 1, so zero = -1\np(-1) = 2(-1)\u00b3 + (-1)\u00b2 - 2(-1) - 1 = -2 + 1 + 2 - 1 = 0 \u2192 Yes, g(x) is a factor\n\n(ii) g(x) = x + 2, so zero = -2\np(-2) = (-2)\u00b3 + 3(-2)\u00b2 + 3(-2) + 1 = -8 + 12 - 6 + 1 = -1 \u2260 0 \u2192 No, g(x) is not a factor\n\n(iii) g(x) = x - 3, so zero = 3\np(3) = 27 - 36 + 3 + 6 = 0 \u2192 Yes, g(x) is a factor",
      difficulty: 'medium',
      tags: ['mathematics', 'polynomials', 'factor-theorem', 'verification'],
    },
    {
      id: 'q9m-4-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Find the value of k, if x - 1 is a factor of p(x) in each of the following cases:\n(i) p(x) = x\u00b2 + x + k\n(ii) p(x) = 2x\u00b2 + kx + \u221a2\n(iii) p(x) = kx\u00b2 - \u221a2x + 1\n(iv) p(x) = kx\u00b2 - 3x + k',
      solution: "If (x - 1) is a factor, then p(1) = 0.\n\n(i) p(1) = 1 + 1 + k = 0 \u2192 2 + k = 0 \u2192 k = -2\n\n(ii) p(1) = 2(1)\u00b2 + k(1) + \u221a2 = 0 \u2192 2 + k + \u221a2 = 0 \u2192 k = -(2 + \u221a2)\n\n(iii) p(1) = k(1)\u00b2 - \u221a2(1) + 1 = 0 \u2192 k - \u221a2 + 1 = 0 \u2192 k = \u221a2 - 1\n\n(iv) p(1) = k(1)\u00b2 - 3(1) + k = 0 \u2192 k - 3 + k = 0 \u2192 2k = 3 \u2192 k = 3/2",
      difficulty: 'medium',
      tags: ['mathematics', 'polynomials', 'factor-theorem', 'find-constant'],
    },
    {
      id: 'q9m-4-2-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Factorise:\n(i) 12x\u00b2 - 7x + 1\n(ii) 2x\u00b2 + 7x + 3\n(iii) 6x\u00b2 + 5x - 6\n(iv) 3x\u00b2 - x - 4',
      solution: "(i) 12x\u00b2 - 7x + 1 = 12x\u00b2 - 3x - 4x + 1 = 3x(4x - 1) - 1(4x - 1) = (4x - 1)(3x - 1)\n\n(ii) 2x\u00b2 + 7x + 3 = 2x\u00b2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (x + 3)(2x + 1)\n\n(iii) 6x\u00b2 + 5x - 6 = 6x\u00b2 + 9x - 4x - 6 = 3x(2x + 3) - 2(2x + 3) = (2x + 3)(3x - 2)\n\n(iv) 3x\u00b2 - x - 4 = 3x\u00b2 + 3x - 4x - 4 = 3x(x + 1) - 4(x + 1) = (x + 1)(3x - 4)",
      difficulty: 'medium',
      tags: ['mathematics', 'polynomials', 'factorisation', 'splitting-middle-term'],
    },
    {
      id: 'q9m-4-2-5',
      questionNumber: 5,
      title: 'Question 5',
      content: 'Factorise:\n(i) x\u00b3 - 2x\u00b2 - x + 2\n(ii) x\u00b3 - 3x\u00b2 - 9x - 5\n(iii) x\u00b3 + 13x\u00b2 + 32x + 20\n(iv) 2y\u00b3 + y\u00b2 - 2y - 1',
      solution: "(i) x\u00b3 - 2x\u00b2 - x + 2\n= x\u00b2(x - 2) - 1(x - 2)\n= (x - 2)(x\u00b2 - 1)\n= (x - 2)(x - 1)(x + 1)\n\n(ii) x\u00b3 - 3x\u00b2 - 9x - 5\nTrying x = -1: p(-1) = -1 - 3 + 9 - 5 = 0, so (x+1) is a factor\nDividing: (x\u00b3 - 3x\u00b2 - 9x - 5) \u00f7 (x+1) = x\u00b2 - 4x - 5\n= (x+1)(x\u00b2 - 4x - 5) = (x+1)(x - 5)(x + 1) = (x+1)\u00b2(x - 5)\n\n(iii) x\u00b3 + 13x\u00b2 + 32x + 20\nTrying x = -1: p(-1) = -1 + 13 - 32 + 20 = 0, so (x+1) is a factor\nDividing: (x\u00b3 + 13x\u00b2 + 32x + 20) \u00f7 (x+1) = x\u00b2 + 12x + 20\n= (x+1)(x\u00b2 + 12x + 20) = (x+1)(x+2)(x+10)\n\n(iv) 2y\u00b3 + y\u00b2 - 2y - 1\nTrying y = 1: p(1) = 2 + 1 - 2 - 1 = 0, so (y-1) is a factor\n= (y-1)(2y\u00b2 + 3y + 1) = (y-1)(2y+1)(y+1)",
      difficulty: 'hard',
      tags: ['mathematics', 'polynomials', 'factorisation', 'cubic-polynomials', 'splitting'],
    },
  ],

  'class-9-mathematics-exploring-algebraic-identities-exercise-4-3': [
    {
      id: 'q9m-4-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Use suitable identities to find the following products:\n(i) (x + 4)(x + 10)\n(ii) (x + 8)(x - 10)\n(iii) (3x + 4)(3x - 5)\n(iv) (y\u00b2 + 3/2)(y\u00b2 - 3/2)\n(v) (3 - 2x)(3 + 2x)',
      solution: "Using identity: (x + a)(x + b) = x\u00b2 + (a+b)x + ab\n\n(i) (x + 4)(x + 10) = x\u00b2 + (4+10)x + 4\u00d710 = x\u00b2 + 14x + 40\n\n(ii) (x + 8)(x - 10) = x\u00b2 + (8-10)x + 8(-10) = x\u00b2 - 2x - 80\n\n(iii) (3x + 4)(3x - 5) = (3x)\u00b2 + (4-5)(3x) + 4(-5) = 9x\u00b2 - 3x - 20\n\n(iv) (y\u00b2 + 3/2)(y\u00b2 - 3/2) = (y\u00b2)\u00b2 - (3/2)\u00b2 = y\u2074 - 9/4 (using (a+b)(a-b) = a\u00b2 - b\u00b2)\n\n(v) (3 - 2x)(3 + 2x) = 3\u00b2 - (2x)\u00b2 = 9 - 4x\u00b2 (using (a+b)(a-b) = a\u00b2 - b\u00b2)",
      difficulty: 'easy',
      tags: ['mathematics', 'algebraic-identities', 'product', 'expansion'],
    },
    {
      id: 'q9m-4-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Evaluate the following products without multiplying directly:\n(i) 103 \u00d7 107\n(ii) 95 \u00d7 96\n(iii) 104 \u00d7 96',
      solution: "Using identity: (x + a)(x + b) = x\u00b2 + (a+b)x + ab\n\n(i) 103 \u00d7 107 = (100 + 3)(100 + 7)\n= 100\u00b2 + (3+7)100 + 3\u00d77\n= 10000 + 1000 + 21 = 11021\n\n(ii) 95 \u00d7 96 = (100 - 5)(100 - 4)\n= 100\u00b2 + (-5-4)100 + (-5)(-4)\n= 10000 - 900 + 20 = 9120\n\n(iii) 104 \u00d7 96 = (100 + 4)(100 - 4)\n= 100\u00b2 - 4\u00b2\n= 10000 - 16 = 9984",
      difficulty: 'easy',
      tags: ['mathematics', 'algebraic-identities', 'evaluation', 'mental-math', 'product'],
    },
    {
      id: 'q9m-4-3-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Factorise the following using appropriate identities:\n(i) 9x\u00b2 + 6xy + y\u00b2\n(ii) 4y\u00b2 - 4y + 1\n(iii) x\u00b2 - y\u00b2/100',
      solution: "(i) 9x\u00b2 + 6xy + y\u00b2 = (3x)\u00b2 + 2(3x)(y) + y\u00b2 = (3x + y)\u00b2 [Using (a+b)\u00b2 = a\u00b2 + 2ab + b\u00b2]\n\n(ii) 4y\u00b2 - 4y + 1 = (2y)\u00b2 - 2(2y)(1) + 1\u00b2 = (2y - 1)\u00b2 [Using (a-b)\u00b2 = a\u00b2 - 2ab + b\u00b2]\n\n(iii) x\u00b2 - y\u00b2/100 = x\u00b2 - (y/10)\u00b2 = (x + y/10)(x - y/10) [Using a\u00b2 - b\u00b2 = (a+b)(a-b)]",
      difficulty: 'easy',
      tags: ['mathematics', 'algebraic-identities', 'factorisation', 'identities'],
    },
    {
      id: 'q9m-4-3-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Expand each of the following using suitable identities:\n(i) (x + 2y + 4z)\u00b2\n(ii) (2x - y + z)\u00b2\n(iii) (-2x + 3y + 2z)\u00b2\n(iv) (3a - 7b - c)\u00b2\n(v) (-2x + 5y - 3z)\u00b2\n(vi) (a/4 - b/2 + 1)\u00b2',
      solution: "Using identity: (a + b + c)\u00b2 = a\u00b2 + b\u00b2 + c\u00b2 + 2ab + 2bc + 2ca\n\n(i) (x + 2y + 4z)\u00b2 = x\u00b2 + (2y)\u00b2 + (4z)\u00b2 + 2(x)(2y) + 2(2y)(4z) + 2(4z)(x)\n= x\u00b2 + 4y\u00b2 + 16z\u00b2 + 4xy + 16yz + 8zx\n\n(ii) (2x - y + z)\u00b2 = (2x)\u00b2 + (-y)\u00b2 + z\u00b2 + 2(2x)(-y) + 2(-y)(z) + 2(z)(2x)\n= 4x\u00b2 + y\u00b2 + z\u00b2 - 4xy - 2yz + 4zx\n\n(iii) (-2x + 3y + 2z)\u00b2 = 4x\u00b2 + 9y\u00b2 + 4z\u00b2 - 12xy + 12yz - 8zx\n\n(iv) (3a - 7b - c)\u00b2 = 9a\u00b2 + 49b\u00b2 + c\u00b2 - 42ab + 14bc - 6ca\n\n(v) (-2x + 5y - 3z)\u00b2 = 4x\u00b2 + 25y\u00b2 + 9z\u00b2 - 20xy - 30yz + 12zx\n\n(vi) (a/4 - b/2 + 1)\u00b2 = a\u00b2/16 + b\u00b2/4 + 1 - ab/4 - b + a/2",
      difficulty: 'medium',
      tags: ['mathematics', 'algebraic-identities', 'expansion', 'trinomial-square'],
    },
  ],

  // ----- Class 9 Mathematics: Chapter 5 - I'm Up and Down and Round and Round (Circles) -----
  // Based on NCERT Chapter 10: Circles

  'class-9-mathematics-im-up-and-down-and-round-and-round-exercise-5-1': [
    {
      id: 'q9m-5-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Fill in the blanks:\n(i) The centre of a circle lies in ___________ of the circle. (exterior/interior)\n(ii) A point whose distance from the centre of a circle is greater than its radius lies in ___________ of the circle. (exterior/interior)\n(iii) The longest chord of a circle is a ___________ of the circle.\n(iv) An arc is a ___________ when its ends are the ends of a diameter.\n(v) Segment of a circle is the region between an arc and ___________ of the circle.\n(vi) A circle divides the plane, on which it lies, in ___________ parts.',
      solution: "(i) interior (the centre is inside the circle)\n(ii) exterior (points outside the circle have distance > radius)\n(iii) diameter (the longest chord passes through the centre)\n(iv) semicircle (half of a circle)\n(v) chord (the region bounded by an arc and its corresponding chord)\n(vi) three parts (interior, exterior, and the circle itself)",
      difficulty: 'easy',
      tags: ['mathematics', 'circles', 'terminology', 'blanks'],
    },
    {
      id: 'q9m-5-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Write True or False: Give reasons for your answers.\n(i) Line segment joining the centre to any point on the circle is a radius of the circle.\n(ii) A circle has only finite number of equal chords.\n(iii) If a circle is divided into three equal arcs, each is a major arc.\n(iv) A chord of a circle, which is twice as long as its radius, is a diameter of the circle.\n(v) Sector is the region between the chord and its corresponding arc.\n(vi) A circle is a plane figure.',
      solution: "(i) True. By definition, a radius is the line segment from the centre to any point on the circle.\n\n(ii) False. A circle has infinitely many chords. For any given length, there are infinitely many chords of that length (unless the length > diameter).\n\n(iii) False. When a circle is divided into three equal arcs, each arc is less than a semicircle (which is half the circle). An arc smaller than a semicircle is a minor arc.\n\n(iv) True. A diameter = 2 \u00d7 radius. A chord that is twice the radius must pass through the centre, hence it's a diameter.\n\n(v) False. The sector is the region between an arc and the two radii joining the centre to the ends of the arc. The region between a chord and its arc is a segment.\n\n(vi) True. A circle is a set of points in a plane at a fixed distance from a centre. It lies in a plane.",
      difficulty: 'easy',
      tags: ['mathematics', 'circles', 'true-false', 'terminology'],
    },
    {
      id: 'q9m-5-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Recall that two circles are congruent if they have the same radii. Prove that equal chords of congruent circles subtend equal angles at their centres.',
      solution: "Given: Two congruent circles with centres O and O'. AB = CD (equal chords)\n\nTo prove: \u2220AOB = \u2220CO'D\n\nProof:\nIn \u0394AOB and \u0394CO'D:\nOA = O'C (radii of congruent circles)\nOB = O'D (radii of congruent circles)\nAB = CD (given)\n\nBy SSS congruence: \u0394AOB \u2245 \u0394CO'D\n\nTherefore, \u2220AOB = \u2220CO'D (CPCT)\n\nThus, equal chords of congruent circles subtend equal angles at their centres.",
      difficulty: 'medium',
      tags: ['mathematics', 'circles', 'congruent-circles', 'chords', 'angles-at-centre'],
    },
    {
      id: 'q9m-5-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'Prove that if chords of congruent circles subtend equal angles at their centres, then the chords are equal.',
      solution: "Given: Two congruent circles with centres O and O'. \u2220AOB = \u2220CO'D\n\nTo prove: AB = CD\n\nProof:\nIn \u0394AOB and \u0394CO'D:\nOA = O'C (radii of congruent circles)\nOB = O'D (radii of congruent circles)\n\u2220AOB = \u2220CO'D (given)\n\nBy SAS congruence: \u0394AOB \u2245 \u0394CO'D\n\nTherefore, AB = CD (CPCT)\n\nThus, if chords of congruent circles subtend equal angles at their centres, then the chords are equal.\n\n[This is the converse of the theorem proved in Question 3.]",
      difficulty: 'medium',
      tags: ['mathematics', 'circles', 'congruent-circles', 'chords', 'converse'],
    },
  ],

  'class-9-mathematics-im-up-and-down-and-round-and-round-exercise-5-2': [
    {
      id: 'q9m-5-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Two circles of radii 5 cm and 3 cm intersect at two points and the distance between their centres is 4 cm. Find the length of the common chord.',
      solution: "Let O and O' be centres of circles with radii r\u2081 = 5 cm and r\u2082 = 3 cm.\nDistance OO' = 4 cm.\n\nLet AB be the common chord, and M be its midpoint (where OO' bisects AB).\nLet OM = x, then O'M = 4 - x.\n\nIn right \u0394AMO: AM\u00b2 = OA\u00b2 - OM\u00b2 = 25 - x\u00b2\nIn right \u0394AMO': AM\u00b2 = O'A\u00b2 - O'M\u00b2 = 9 - (4-x)\u00b2\n\nEquating: 25 - x\u00b2 = 9 - (16 - 8x + x\u00b2)\n25 - x\u00b2 = 9 - 16 + 8x - x\u00b2\n25 = -7 + 8x\n8x = 32\nx = 4\n\nSo OM = 4 cm, O'M = 0 cm (the common chord passes through O')\n\nAM\u00b2 = 25 - 16 = 9\nAM = 3 cm\n\nLength of common chord = 2 \u00d7 AM = 6 cm",
      difficulty: 'hard',
      tags: ['mathematics', 'circles', 'common-chord', 'intersecting-circles'],
    },
    {
      id: 'q9m-5-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'If two equal chords of a circle intersect within the circle, prove that the segments of one chord are equal to corresponding segments of the other chord.',
      solution: "Given: Circle with centre O. Equal chords AB and CD intersect at point E.\n\nTo prove: AE = DE and BE = CE\n\nConstruction: Draw OM \u22a5 AB and ON \u22a5 CD. Join OE.\n\nProof:\nAB = CD (given)\nOM = ON (equal chords are equidistant from centre)\n\nIn \u0394OME and \u0394ONE:\nOM = ON (proved above)\nOE = OE (common)\n\u2220OME = \u2220ONE = 90\u00b0 (construction)\n\nBy RHS congruence: \u0394OME \u2245 \u0394ONE\nSo ME = NE (CPCT)\n\nNow, AM = MB = AB/2 (perpendicular from centre bisects chord)\nCN = ND = CD/2 = AB/2 (since AB = CD)\nSo AM = ND and MB = CN\n\nAE = AM + ME = ND + NE = DE\nBE = MB - ME = CN - NE = CE\n\nThus, AE = DE and BE = CE.",
      difficulty: 'hard',
      tags: ['mathematics', 'circles', 'equal-chords', 'intersecting-chords', 'proof'],
    },
  ],

  // ----- Class 9 Mathematics: Chapter 6 - Measuring Space (Heron's Formula) -----
  // Based on NCERT Chapter 12: Heron's Formula

  'class-9-mathematics-measuring-space-perimeter-and-area-exercise-6-1': [
    {
      id: 'q9m-6-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'A traffic signal board, indicating \'SCHOOL AHEAD\', is an equilateral triangle with side \'a\'. Find the area of the signal board, using Heron\'s formula. If its perimeter is 180 cm, what will be the area of the signal board?',
      solution: "For an equilateral triangle with side a:\nSemi-perimeter s = (a + a + a)/2 = 3a/2\n\nUsing Heron's formula:\nArea = \u221a[s(s-a)(s-a)(s-a)]\n= \u221a[(3a/2)(a/2)(a/2)(a/2)]\n= \u221a[3a\u2074/16]\n= a\u00b2\u221a3/4\n\nGiven perimeter = 180 cm\n3a = 180\na = 60 cm\n\nArea = (60\u00b2 \u00d7 \u221a3)/4 = (3600 \u00d7 \u221a3)/4 = 900\u221a3 cm\u00b2\n\nTherefore, area of the signal board = 900\u221a3 cm\u00b2.",
      difficulty: 'easy',
      tags: ['mathematics', 'herons-formula', 'equilateral-triangle', 'area'],
    },
    {
      id: 'q9m-6-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'The triangular side walls of a flyover have been used for advertisements. The sides of the walls are 122 m, 22 m and 120 m (see figure). The advertisements yield an earning of \u20b95000 per m\u00b2 per year. A company hired one of its walls for 3 months. How much rent did it pay?',
      solution: "Sides: a = 122 m, b = 22 m, c = 120 m\n\nSemi-perimeter s = (122 + 22 + 120)/2 = 264/2 = 132 m\n\nArea = \u221a[s(s-a)(s-b)(s-c)]\n= \u221a[132(132-122)(132-22)(132-120)]\n= \u221a[132 \u00d7 10 \u00d7 110 \u00d7 12]\n= \u221a[1742400]\n= 1320 m\u00b2\n\nYearly earning = 1320 \u00d7 5000 = \u20b966,00,000 per year\n\nRent for 3 months = (3/12) \u00d7 66,00,000 = \u20b916,50,000\n\nTherefore, the company paid \u20b916,50,000.",
      difficulty: 'medium',
      tags: ['mathematics', 'herons-formula', 'triangle', 'area-application', 'cost'],
    },
    {
      id: 'q9m-6-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'There is a slide in a park. One of its side walls has been painted in some colour with a message "KEEP THE PARK GREEN AND CLEAN" (see figure). If the sides of the wall are 15 m, 11 m and 6 m, find the area painted in colour.',
      solution: "Sides: a = 15 m, b = 11 m, c = 6 m\n\nSemi-perimeter s = (15 + 11 + 6)/2 = 32/2 = 16 m\n\nArea = \u221a[s(s-a)(s-b)(s-c)]\n= \u221a[16(16-15)(16-11)(16-6)]\n= \u221a[16 \u00d7 1 \u00d7 5 \u00d7 10]\n= \u221a[800]\n= 20\u221a2 m\u00b2\n\u2248 28.28 m\u00b2\n\nTherefore, the area painted in colour is 20\u221a2 m\u00b2 (approximately 28.28 m\u00b2).",
      difficulty: 'medium',
      tags: ['mathematics', 'herons-formula', 'triangle', 'area', 'application'],
    },
  ],

  'class-9-mathematics-measuring-space-perimeter-and-area-exercise-6-2': [
    {
      id: 'q9m-6-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Find the area of a quadrilateral ABCD in which AB = 3 cm, BC = 4 cm, CD = 4 cm, DA = 5 cm and AC = 5 cm.',
      solution: "The diagonal AC divides the quadrilateral into two triangles: \u0394ABC and \u0394ADC.\n\nIn \u0394ABC: AB = 3, BC = 4, AC = 5\n3\u00b2 + 4\u00b2 = 9 + 16 = 25 = 5\u00b2, so \u0394ABC is right-angled at B.\nArea of \u0394ABC = \u00bd \u00d7 3 \u00d7 4 = 6 cm\u00b2\n\nIn \u0394ADC: sides a = 5, b = 4, c = 5\ns = (5 + 4 + 5)/2 = 7\nArea = \u221a[7(7-5)(7-4)(7-5)] = \u221a[7 \u00d7 2 \u00d7 3 \u00d7 2] = \u221a84 = 2\u221a21 cm\u00b2 \u2248 9.17 cm\u00b2\n\nTotal area = 6 + 2\u221a21 = 6 + 9.17 = 15.17 cm\u00b2\n\nTherefore, area of quadrilateral ABCD \u2248 15.17 cm\u00b2.",
      difficulty: 'hard',
      tags: ['mathematics', 'herons-formula', 'quadrilateral', 'area-by-diagonal'],
    },
    {
      id: 'q9m-6-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'A rhombus shaped field has green grass for 18 cows to graze. If each side of the rhombus is 30 m and its longer diagonal is 48 m, how much area of grass field will each cow be getting?',
      solution: "Side of rhombus = 30 m, diagonal AC = 48 m\n\nIn \u0394ABC (half of rhombus): AB = BC = 30 m, AC = 48 m\ns = (30 + 30 + 48)/2 = 54 m\n\nArea of \u0394ABC = \u221a[54(54-30)(54-30)(54-48)]\n= \u221a[54 \u00d7 24 \u00d7 24 \u00d7 6]\n= \u221a[186624]\n= 432 m\u00b2\n\nArea of rhombus = 2 \u00d7 432 = 864 m\u00b2\n\nArea per cow = 864/18 = 48 m\u00b2\n\nTherefore, each cow gets 48 m\u00b2 of grass field.",
      difficulty: 'medium',
      tags: ['mathematics', 'herons-formula', 'rhombus', 'area-division'],
    },
    {
      id: 'q9m-6-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'An umbrella is made by stitching 10 triangular pieces of cloth of two different colours (see figure), each piece measuring 20 cm, 50 cm and 50 cm. How much cloth of each colour is required for the umbrella?',
      solution: "Each triangular piece has sides: a = 20 cm, b = 50 cm, c = 50 cm\n\nSemi-perimeter s = (20 + 50 + 50)/2 = 120/2 = 60 cm\n\nArea of one triangular piece = \u221a[60(60-20)(60-50)(60-50)]\n= \u221a[60 \u00d7 40 \u00d7 10 \u00d7 10]\n= \u221a[240000]\n= 200\u221a6 cm\u00b2\n\u2248 489.9 cm\u00b2\n\nTotal area of 10 pieces = 10 \u00d7 200\u221a6 = 2000\u221a6 cm\u00b2\n\nSince there are two colours in alternate triangles:\nCloth of each colour = 5 \u00d7 200\u221a6 = 1000\u221a6 cm\u00b2 \u2248 2449.5 cm\u00b2\n\nTherefore, cloth of each colour required \u2248 2449.5 cm\u00b2 or 1000\u221a6 cm\u00b2.",
      difficulty: 'hard',
      tags: ['mathematics', 'herons-formula', 'triangular-pieces', 'application'],
    },
  ],

  // ----- Class 9 Mathematics: Chapter 7 - The Mathematics of Maybe (Probability) -----
  // Based on NCERT Chapter 15: Probability

  'class-9-mathematics-the-mathematics-of-maybe-introduction-to-probability-exercise-7-1': [
    {
      id: 'q9m-7-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'In a cricket match, a batswoman hits a boundary 6 times out of 30 balls she plays. Find the probability that she did not hit a boundary.',
      solution: "Total balls played = 30\nNumber of boundaries = 6\nNumber of balls with no boundary = 30 - 6 = 24\n\nP(not hitting a boundary) = 24/30 = 4/5 = 0.8\n\nTherefore, the probability is 4/5 or 0.8.",
      difficulty: 'easy',
      tags: ['mathematics', 'probability', 'cricket', 'empirical-probability'],
    },
    {
      id: 'q9m-7-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: '1500 families with 2 children were selected randomly, and the following data were recorded:\n\nNumber of girls in a family | 0 | 1 | 2\nNumber of families | 211 | 814 | 475\n\nCompute the probability of a family, chosen at random, having:\n(i) 2 girls\n(ii) 1 girl\n(iii) No girl\n\nAlso check whether the sum of these probabilities is 1.',
      solution: "Total families = 211 + 814 + 475 = 1500\n\n(i) P(2 girls) = 475/1500 = 19/60 \u2248 0.3167\n\n(ii) P(1 girl) = 814/1500 = 407/750 \u2248 0.5427\n\n(iii) P(no girl) = 211/1500 \u2248 0.1407\n\nSum = 475/1500 + 814/1500 + 211/1500 = (475+814+211)/1500 = 1500/1500 = 1 \u2713\n\nYes, the sum of all probabilities is 1.",
      difficulty: 'easy',
      tags: ['mathematics', 'probability', 'family-data', 'sum-of-probabilities'],
    },
    {
      id: 'q9m-7-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'In a particular section of Class IX, 40 students were asked about the months of their birth. The following data was obtained:\n\nMonth \u2192 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec\nStudents \u2192 3, 4, 2, 2, 5, 1, 2, 6, 3, 4, 4, 4\n\nFind the probability that a student of this class was born in:\n(i) August\n(ii) A month with 31 days\n(iii) A month with 30 days',
      solution: "Total students = 40\n\n(i) Students born in August = 6\nP(August) = 6/40 = 3/20 = 0.15\n\n(ii) Months with 31 days: Jan(3), Mar(2), May(5), Jul(2), Aug(6), Oct(4), Dec(4)\nTotal students in these months = 3 + 2 + 5 + 2 + 6 + 4 + 4 = 26\nP(31-day month) = 26/40 = 13/20 = 0.65\n\n(iii) Months with 30 days: Apr(2), Jun(1), Sep(3), Nov(4)\nTotal students in these months = 2 + 1 + 3 + 4 = 10\nP(30-day month) = 10/40 = 1/4 = 0.25\n\nNote: February has 28/29 days. Students born in Feb = 4.",
      difficulty: 'easy',
      tags: ['mathematics', 'probability', 'birth-month', 'data-analysis'],
    },
  ],

  'class-9-mathematics-the-mathematics-of-maybe-introduction-to-probability-exercise-7-2': [
    {
      id: 'q9m-7-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Three coins are tossed simultaneously 200 times with the following frequencies of different outcomes:\n\nOutcome \u2192 3 heads | 2 heads | 1 head | No head\nFrequency \u2192 23 | 72 | 77 | 28\n\nCompute the probability of getting:\n(i) 3 heads\n(ii) 2 heads\n(iii) 1 head\n(iv) No head\n(v) At least 1 head',
      solution: "Total trials = 200\n\n(i) P(3 heads) = 23/200 = 0.115\n(ii) P(2 heads) = 72/200 = 9/25 = 0.36\n(iii) P(1 head) = 77/200 = 0.385\n(iv) P(no head) = 28/200 = 7/50 = 0.14\n(v) P(at least 1 head) = P(1 head) + P(2 heads) + P(3 heads)\n= 77/200 + 72/200 + 23/200 = 172/200 = 43/50 = 0.86\n\nCheck: P(at least 1 head) + P(no head) = 0.86 + 0.14 = 1 \u2713",
      difficulty: 'medium',
      tags: ['mathematics', 'probability', 'coins', 'multiple-outcomes'],
    },
    {
      id: 'q9m-7-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'A coin is tossed 1000 times with the following frequencies:\nHead: 455, Tail: 545\nCompute the probability for each event.',
      solution: "Total trials = 1000\n\nP(Head) = 455/1000 = 0.455\nP(Tail) = 545/1000 = 0.545\n\nCheck: P(Head) + P(Tail) = 0.455 + 0.545 = 1 \u2713\n\nThe probability of getting a head is 0.455 and tail is 0.545.",
      difficulty: 'easy',
      tags: ['mathematics', 'probability', 'coin-toss', 'empirical'],
    },
    {
      id: 'q9m-7-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'To know the opinion of the students about the subject statistics, a survey of 200 students was conducted. The data is recorded in the following table:\n\nOpinion \u2192 Like | Dislike\nStudents \u2192 135 | 65\n\nFind the probability that a student chosen at random:\n(i) Likes statistics\n(ii) Dislikes statistics',
      solution: "Total students = 200\n\n(i) Students who like statistics = 135\nP(likes statistics) = 135/200 = 27/40 = 0.675\n\n(ii) Students who dislike statistics = 65\nP(dislikes statistics) = 65/200 = 13/40 = 0.325\n\nCheck: 135/200 + 65/200 = 200/200 = 1 \u2713",
      difficulty: 'easy',
      tags: ['mathematics', 'probability', 'survey', 'opinion'],
    },
  ],

  // ----- Class 9 Mathematics: Chapter 8 - Predicting What Comes Next (Statistics) -----
  // Based on NCERT Chapter 14: Statistics

  'class-9-mathematics-predicting-what-comes-next-exploring-sequences-exercise-8-1': [
    {
      id: 'q9m-8-1-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'Give five examples of data that you can collect from your day-to-day life.',
      solution: "Five examples of data from day-to-day life:\n(i) Number of students in each class of your school\n(ii) Number of vehicles passing through a crossing in an hour\n(iii) Temperature recorded at noon each day for a month\n(iv) Marks obtained by students in a test\n(v) Number of members in each family of your locality\n\nData can be collected through observation, surveys, or experiments.",
      difficulty: 'easy',
      tags: ['mathematics', 'statistics', 'data-collection', 'examples'],
    },
    {
      id: 'q9m-8-1-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Classify the data in Q1 above as primary or secondary data.',
      solution: "Primary data: Data collected directly by the investigator for a specific purpose.\nSecondary data: Data collected by someone else and already available.\n\nFrom the examples in Q1:\n(i) Number of students in each class \u2192 Primary (collected by visiting school)\n(ii) Number of vehicles passing through a crossing \u2192 Primary (collected by observing)\n(iii) Temperature recorded at noon \u2192 Primary (if recording yourself) or Secondary (if from records)\n(iv) Marks obtained by students \u2192 Primary (collected from test results directly)\n(v) Number of members in each family \u2192 Primary (collected through survey)\n\nNote: Most data we collect ourselves is primary data. If we use data published by someone else (like census data), it is secondary data.",
      difficulty: 'easy',
      tags: ['mathematics', 'statistics', 'primary-data', 'secondary-data', 'classification'],
    },
    {
      id: 'q9m-8-1-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'The blood groups of 30 students of Class VIII are recorded as follows:\nA, B, O, O, AB, O, A, O, B, A, O, B, A, O, O, A, AB, O, A, A, O, O, AB, B, A, O, B, A, B, O\n\nRepresent this data in the form of a frequency distribution table.',
      solution: "Frequency distribution table:\n\nBlood Group | Tally Marks | Frequency\nA | |||| |||| | 9\nB | |||| | 5\nO | |||| |||| |||| | 14\nAB | ||| | 3\nTotal | | 30\n\nCount each occurrence:\nA appears 9 times\nB appears 5 times\nO appears 14 times\nAB appears 3 times\nTotal: 9 + 5 + 14 + 3 = 30 \u2713",
      difficulty: 'easy',
      tags: ['mathematics', 'statistics', 'frequency-distribution', 'tally-marks', 'blood-groups'],
    },
    {
      id: 'q9m-8-1-4',
      questionNumber: 4,
      title: 'Question 4',
      content: 'The distance (in km) of 40 engineers from their residence to their place of work were found as follows:\n5, 3, 10, 20, 25, 11, 13, 7, 12, 31, 19, 10, 12, 17, 18, 11, 32, 17, 16, 2, 7, 9, 7, 8, 3, 5, 12, 15, 18, 3, 12, 14, 2, 9, 6, 15, 15, 7, 6, 12\n\nConstruct a grouped frequency distribution table with class size 5.',
      solution: "Range: Minimum = 2, Maximum = 32\nClass size = 5\n\nGrouped Frequency Distribution Table:\n\nDistance (km) | Tally Marks | Frequency\n0 - 5 | |||| | 4\n5 - 10 | |||| |||| | | 11\n10 - 15 | |||| |||| || | 12\n15 - 20 | |||| ||| | 8\n20 - 25 | || | 2\n25 - 30 | | | 1\n30 - 35 | || | 2\nTotal | | 40\n\nNote: The class intervals are 0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35.",
      difficulty: 'medium',
      tags: ['mathematics', 'statistics', 'grouped-frequency', 'class-interval', 'data-organization'],
    },
  ],

  'class-9-mathematics-predicting-what-comes-next-exploring-sequences-exercise-8-2': [
    {
      id: 'q9m-8-2-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'The following number of goals were scored by a team in a series of 10 matches:\n2, 3, 4, 5, 0, 1, 3, 3, 4, 3\n\nFind the mean, median and mode of these scores.',
      solution: "Data: 2, 3, 4, 5, 0, 1, 3, 3, 4, 3\n\nMean = (2+3+4+5+0+1+3+3+4+3)/10 = 28/10 = 2.8\n\nArranging in ascending order: 0, 1, 2, 3, 3, 3, 3, 4, 4, 5\nMedian = average of 5th and 6th values = (3+3)/2 = 3\n\nMode = 3 (occurs 4 times, maximum frequency)\n\nTherefore, Mean = 2.8, Median = 3, Mode = 3.",
      difficulty: 'easy',
      tags: ['mathematics', 'statistics', 'mean', 'median', 'mode', 'central-tendency'],
    },
    {
      id: 'q9m-8-2-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'Find the mean of the following data:\n(i) First five whole numbers\n(ii) First six odd natural numbers\n(iii) First seven multiples of 3',
      solution: "(i) First five whole numbers: 0, 1, 2, 3, 4\nMean = (0+1+2+3+4)/5 = 10/5 = 2\n\n(ii) First six odd natural numbers: 1, 3, 5, 7, 9, 11\nMean = (1+3+5+7+9+11)/6 = 36/6 = 6\n\n(iii) First seven multiples of 3: 3, 6, 9, 12, 15, 18, 21\nMean = (3+6+9+12+15+18+21)/7 = 84/7 = 12",
      difficulty: 'easy',
      tags: ['mathematics', 'statistics', 'mean', 'different-data-sets'],
    },
    {
      id: 'q9m-8-2-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'Find the median of the following data:\n(i) 3, 5, 1, 7, 9, 11, 13\n(ii) 15, 6, 16, 8, 22, 21, 9, 18, 25',
      solution: "(i) Data: 3, 5, 1, 7, 9, 11, 13\nArranging in ascending order: 1, 3, 5, 7, 9, 11, 13\nn = 7 (odd)\nMedian = (n+1)/2 th term = 4th term = 7\n\n(ii) Data: 15, 6, 16, 8, 22, 21, 9, 18, 25\nArranging in ascending order: 6, 8, 9, 15, 16, 18, 21, 22, 25\nn = 9 (odd)\nMedian = (9+1)/2 th term = 5th term = 16",
      difficulty: 'easy',
      tags: ['mathematics', 'statistics', 'median', 'odd-number-of-terms'],
    },
  ],

  'class-9-mathematics-predicting-what-comes-next-exploring-sequences-exercise-8-3': [
    {
      id: 'q9m-8-3-1',
      questionNumber: 1,
      title: 'Question 1',
      content: 'A survey conducted by an organisation for the cause of illness and death among the women between the ages 15-44 (in years) worldwide found the following figures (in %):\n\nS.No. | Causes | Female fatality rate (%)\n1 | Reproductive health conditions | 31.8\n2 | Neuropsychiatric conditions | 25.4\n3 | Injuries | 12.4\n4 | Cardiovascular conditions | 14.3\n5 | Respiratory conditions | 4.1\n6 | Other causes | 12.0\n\n(i) Represent the information given above graphically.\n(ii) Which condition is the major cause of women\'s ill health and death worldwide?\n(iii) Try to find out, with the help of your teacher, any two factors which play a major role in the cause in (ii) above being the major cause.',
      solution: "(i) A bar graph can be drawn with causes on x-axis and fatality rate (%) on y-axis. Each cause will have a bar of height equal to its percentage.\n\n(ii) Reproductive health conditions (31.8%) is the major cause of women's ill health and death worldwide.\n\n(iii) Two factors that contribute to reproductive health conditions being a major cause:\n   - Lack of access to proper healthcare facilities, especially in developing countries\n   - Lack of awareness about reproductive health, hygiene, and family planning methods",
      difficulty: 'medium',
      tags: ['mathematics', 'statistics', 'data-interpretation', 'bar-graph', 'health-survey'],
    },
    {
      id: 'q9m-8-3-2',
      questionNumber: 2,
      title: 'Question 2',
      content: 'The following data on the number of girls (to the nearest ten) per thousand boys in different sections of Indian society is given below:\n\nSection | Number of girls per thousand boys\nScheduled Caste | 940\nScheduled Tribe | 970\nNon-SC/ST | 920\nBackward districts | 950\nNon-backward districts | 920\nRural | 930\nUrban | 910\n\n(i) Represent the information above by a bar graph.\n(ii) In the classroom, discuss what conclusions can be arrived at from the graph.',
      solution: "(i) A bar graph can be drawn with sections on x-axis and number of girls per thousand boys on y-axis. Each section will have a bar of corresponding height.\n\n(ii) Conclusions from the graph:\n   - The number of girls per thousand boys is highest among Scheduled Tribes (970)\n   - It is lowest in urban areas (910)\n   - Overall, the figure is below 1000, indicating fewer girls than boys in all sections\n   - Backward districts have a better ratio (950) than non-backward districts (920)\n   - Rural areas (930) have a better ratio than urban areas (910)\n   - This suggests a need for improving the status of girls, especially in urban areas and among non-SC/ST communities",
      difficulty: 'medium',
      tags: ['mathematics', 'statistics', 'bar-graph', 'social-data', 'gender-ratio'],
    },
    {
      id: 'q9m-8-3-3',
      questionNumber: 3,
      title: 'Question 3',
      content: 'The following table gives the number of children (in thousands) in different age groups who are literate in a city:\n\nAge group | Number of literate children (in thousands)\n5 - 7 | 15\n7 - 9 | 25\n9 - 11 | 30\n11 - 13 | 12\n13 - 15 | 8\n15 - 17 | 5\n\nDraw a histogram to represent the data.',
      solution: "To draw a histogram:\n\n1. The data has continuous class intervals (5-7, 7-9, etc.) with class size = 2.\n2. Draw x-axis representing age groups and y-axis representing number of literate children (in thousands).\n3. Since class intervals are equal, draw rectangles with:\n   - Width = class size = 2 units\n   - Height = frequency (number of literate children in thousands)\n\nHistogram bars:\n- 5-7: height 15\n- 7-9: height 25\n- 9-11: height 30\n- 11-13: height 12\n- 13-15: height 8\n- 15-17: height 5\n\nThe histogram shows that literacy is highest in the 9-11 age group and decreases after age 11.",
      difficulty: 'medium',
      tags: ['mathematics', 'statistics', 'histogram', 'graphical-representation', 'literacy-data'],
    },
  ],

};
