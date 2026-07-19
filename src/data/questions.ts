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
};
