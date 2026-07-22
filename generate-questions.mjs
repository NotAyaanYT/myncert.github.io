/**
 * COMPREHENSIVE question generator for Classes 8, 11, 12.
 * Data-driven with chapter-specific question banks for all chapters.
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const FILE_PATH = path.resolve('src/data/questions.ts');

function esc(s) { return s.replace(/'/g, "\\'").replace(/\n/g, '\\n'); }

function q(id, qNum, content, solution, difficulty = 'medium', tags = []) {
  const tagStr = ['mathematics', ...tags].map(t => `'${t}'`).join(', ');
  return `    {
      id: '${id}',
      questionNumber: ${qNum},
      title: 'Question ${qNum}',
      content: '${esc(content)}',
      solution: '${esc(solution)}',
      difficulty: '${difficulty}',
      tags: [${tagStr}],
    }`;
}

function exercise(key, questions) { return `\n  '${key}': [\n${questions.join(',\n')},\n  ],`; }

// ==========================================
// EXERCISE CONFIG
// ==========================================

const classes = {
  6: [
    [1,'patterns-in-mathematics',[1,2]],[2,'lines-and-angles',[1,2]],[3,'number-play',[1,2]],
    [4,'data-handling-and-presentation',[1,2]],[5,'prime-time',[1,2,3]],[6,'perimeter-and-area',[1,2]],
    [7,'fractions',[1,2,3]],[8,'playing-with-constructions',[1,2]],[9,'symmetry',[1,2]],
    [10,'the-other-side-of-zero',[1,2]],
  ],
  7: [
    [1,'large-numbers-around-us',[1,2,3]],[2,'arithmetic-expressions',[1,2]],
    [3,'a-peek-beyond-the-point',[1,2]],[4,'expressions-using-letter-numbers',[1,2]],
    [5,'parallel-and-intersecting-lines',[1,2]],[6,'number-play',[1,2]],
    [7,'a-tale-of-three-intersecting-lines',[1,2,3]],[8,'working-with-fractions',[1,2]],
    [9,'geometric-twins',[1,2]],[10,'operations-with-integers',[1,2]],
    [11,'finding-common-ground',[1,2]],[12,'another-peek-beyond-the-point',[1,2]],
    [13,'connecting-the-dots',[1,2]],[14,'constructions-and-tilings',[1,2]],
    [15,'finding-the-unknown',[1,2]],
  ],
  8: [
    [1,'a-square-and-a-cube',[1,2]],[2,'power-play',[1,2]],[3,'a-story-of-numbers',[1,2]],
    [4,'quadrilaterals',[1,2,3]],[5,'number-play-class8',[1,2,3]],[6,'we-distribute-yet-things-multiply',[1,2]],
    [7,'proportional-reasoning-i',[1,2,3]],[8,'fractions-in-disguise',[1,2]],[9,'the-baudhayana-pythagoras-theorem',[1,2]],
    [10,'proportional-reasoning-ii',[1,2]],[11,'exploring-some-geometric-themes',[1,2]],[12,'tales-by-dots-and-lines',[1,2]],
    [13,'algebra-play',[1,2,3]],[14,'area',[1,2]],
  ],
  11: [
    [1,'sets',[1,2,3,4,5,6]],[2,'relations-and-functions',[1,2,3]],[3,'trigonometric-functions',[1,2,3]],
    [4,'complex-numbers-and-quadratic-equations',[1,2,3]],[5,'linear-inequalities',[1,2]],
    [6,'permutations-and-combinations',[1,2,3,4]],[7,'binomial-theorem',[1,2]],[8,'sequence-and-series',[1,2,3]],
    [9,'straight-lines',[1,2,3]],[10,'conic-sections',[1,2,3,4]],[11,'introduction-to-three-dimensional-geometry',[1,2]],
    [12,'limits-and-derivatives',[1,2]],[13,'statistics',[1,2,3]],[14,'probability',[1,2,3]],
  ],
  12: [
    [1,'relations-and-functions',[1,2,3,4]],[2,'inverse-trigonometric-functions',[1,2]],[3,'matrices',[1,2,3,4]],
    [4,'determinants',[1,2,3,4,5]],[5,'continuity-and-differentiability',[1,2,3,4,5,6,7,8]],
    [6,'application-of-derivatives',[1,2,3,4,5]],[7,'integrals',[1,2,3,4,5,6,7,8,9,10,11]],
    [8,'application-of-integrals',[1,2]],[9,'differential-equations',[1,2,3,4,5,6]],
    [10,'vector-algebra',[1,2,3,4]],[11,'three-dimensional-geometry',[1,2,3]],[12,'linear-programming',[1,2]],
    [13,'probability',[1,2,3,4,5]],
  ],
};

// ==========================================
// MASTER QUESTION BANK
// ==========================================
// Key: "class-ch-ex". Value: arrays of [content, solution, difficulty, [tags]]

const BANK = {};

function add(name, data) { BANK[name] = data; }

// ===== CLASS 8 =====

add('8-1-1', [
  ['Find the square of 14 using the identity (a+b)^2.', 'We use (a+b)^2 = a^2 + 2ab + b^2.\nLet a = 10, b = 4.\n14^2 = (10+4)^2 = 10^2 + 2(10)(4) + 4^2 = 100 + 80 + 16 = 196.', 'easy', ['squares','identity']],
  ['Check if 324 is a perfect square. If yes, find its square root.', '324 = 2^2 x 3^4 = (2 x 3^2)^2 = (2 x 9)^2 = 18^2.\nAll exponents are even, so 324 is a perfect square.\nsqrt(324) = 18.', 'medium', ['squares','perfect-square']],
  ['Find the square root of 1764 by prime factorisation.', '1764 = 2^2 x 3^2 x 7^2 = (2 x 3 x 7)^2 = 42^2.\nsqrt(1764) = 42.', 'easy', ['square-roots','prime-factorisation']],
  ['A square field has an area of 2025 sq m. Find its perimeter.', 'Area = side^2 = 2025.\n2025 = 3^4 x 5^2 = (3^2 x 5)^2 = 45^2.\nSide = 45 m.\nPerimeter = 4 x 45 = 180 m.', 'medium', ['square-roots','word-problem','perimeter']],
  ['Find the smallest square number divisible by 8, 15, and 20.', 'LCM = 2^3 x 3 x 5 = 120.\nFor perfect square, all exponents even.\n120 = 2^3 x 3 x 5, need to multiply by 2 x 3 x 5 = 30.\n120 x 30 = 3600 = 2^4 x 3^2 x 5^2 = 60^2.', 'hard', ['squares','lcm']],
]);
add('8-1-2', [
  ['Find the cube of 15.', '15^3 = 15 x 15 x 15 = 225 x 15 = 3375.\nUsing factors: 15^3 = (3x5)^3 = 3^3 x 5^3 = 27 x 125 = 3375.', 'easy', ['cubes']],
  ['Check if 729 is a perfect cube.', '729 = 3^6 = (3^2)^3 = 9^3.\nAll exponents multiples of 3, so 729 is a perfect cube.\ncuberoot(729) = 9.', 'medium', ['cubes','perfect-cube']],
  ['Find the cube root of 15625 by prime factorisation.', '15625 = 5^6 = (5^2)^3 = 25^3.\ncuberoot(15625) = 25.', 'easy', ['cube-roots','prime-factorisation']],
  ['A cubical box has volume 2744 cc. Find its side.', 'Volume = side^3 = 2744.\n2744 = 2^3 x 7^3 = (2x7)^3 = 14^3.\nSide = 14 cm.', 'medium', ['cube-roots','volume']],
  ['Find the smallest number to multiply 5400 to make it a perfect cube.', '5400 = 2^3 x 3^3 x 5^2.\nNeed exponent of 5 to be multiple of 3.\nMultiply by 5: 5400 x 5 = 27000 = 2^3 x 3^3 x 5^3 = 30^3.', 'hard', ['cubes','perfect-cube']],
]);

add('8-2-1', [
  ['Express 256 as a power of 2.', '256 = 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 = 2^8.', 'easy', ['exponents']],
  ['Simplify: (2^3)^4 / 2^5.', '(2^3)^4 = 2^12.\n2^12 / 2^5 = 2^7 = 128.', 'medium', ['exponents','laws-of-exponents']],
  ['If 2^(x+1) = 16, find x.', '16 = 2^4.\nSo 2^(x+1) = 2^4.\nx + 1 = 4, x = 3.', 'easy', ['exponents','equations']],
  ['Express 0.000000045 in scientific notation.', '0.000000045 = 4.5 x 10^(-8).', 'medium', ['scientific-notation']],
  ['Simplify: (3^2 x 3^4) / (3^3 x 3^0).', '3^2 x 3^4 = 3^6.\n3^3 x 3^0 = 3^3.\n3^6 / 3^3 = 3^3 = 27.', 'medium', ['exponents','laws-of-exponents']],
]);
add('8-2-2', [
  ['Simplify: 2^(-3) x 2^5.', '2^(-3) x 2^5 = 2^2 = 4.', 'easy', ['exponents','negative-exponents']],
  ['Find the value of (4/9)^(-2).', '(4/9)^(-2) = (9/4)^2 = 81/16 = 5.0625.', 'medium', ['exponents','negative-exponents','fractions']],
  ['Simplify: (a^3 b^2) / (a b^4).', '= a^(3-1) x b^(2-4) = a^2 x b^(-2) = a^2 / b^2 = (a/b)^2.', 'medium', ['exponents','algebra']],
  ['If 5^(x-2) = 125, find x.', '125 = 5^3.\nx - 2 = 3, x = 5.', 'easy', ['exponents','equations']],
  ['Earth-Sun distance is 1.496 x 10^8 km. Express as whole number.', '1.496 x 10^8 = 149,600,000 km.', 'easy', ['scientific-notation']],
]);

add('8-3-1', [
  ['Represent 3/4 and -3/4 on a number line.', '3/4 is between 0 and 1 at 0.75.\n-3/4 is between -1 and 0 at -0.75.', 'easy', ['number-line','rational-numbers']],
  ['Find five rational numbers between 1/3 and 1/2.', '1/3 = 4/12, 1/2 = 6/12.\nNumbers: 9/24, 10/24, 11/24, 12/24, 13/24.\nSimplified: 3/8, 5/12, 11/24, 1/2, 13/24.', 'medium', ['rational-numbers']],
  ['Express -42/98 in standard form.', 'GCD of 42 and 98 is 14.\n-42/98 = -3/7.', 'easy', ['rational-numbers','standard-form']],
  ['Which is greater: -5/7 or -3/5?', '-5/7 = -25/35, -3/5 = -21/35.\nSince -21 > -25, -3/5 > -5/7.', 'medium', ['rational-numbers','comparison']],
  ['Find: 2/5 + (-4/15) + 7/10.', 'LCM = 30.\n12/30 + (-8/30) + 21/30 = 25/30 = 5/6.', 'medium', ['rational-numbers','addition']],
]);
add('8-3-2', [
  ['Multiply: 7/9 x 6/14.', '7/9 x 6/14 = 42/126 = 1/3.', 'easy', ['rational-numbers','multiplication']],
  ['Divide: 8/15 by 16/25.', '8/15 / 16/25 = 8/15 x 25/16 = 200/240 = 5/6.', 'medium', ['rational-numbers','division']],
  ['Simplify: 3/7 + 2/5 - 1/3.', 'LCM = 105.\n45/105 + 42/105 - 35/105 = 52/105.', 'medium', ['rational-numbers','addition','subtraction']],
  ['Find: (-5/12) x 4/15 x (-3/2).', '= (60)/(360) = 1/6.', 'medium', ['rational-numbers','multiplication']],
  ['Product of two rationals is -8/15. One is -2/5. Find the other.', 'x = (-8/15)/(-2/5) = (-8/15)x(-5/2) = 40/30 = 4/3.', 'hard', ['rational-numbers','equations']],
]);

add('8-4-1', [
  ['What is the sum of interior angles of a quadrilateral? Prove.', 'Sum = 360 degrees.\nA diagonal divides quadrilateral into 2 triangles.\n2 x 180 = 360.', 'easy', ['quadrilaterals','angle-sum']],
  ['Three angles of a quadrilateral are 75, 90, 110. Find the fourth.', 'Fourth = 360 - (75+90+110) = 360 - 275 = 85 degrees.', 'easy', ['quadrilaterals','angles']],
  ['In a parallelogram, one angle is 70. Find the other three.', 'Adjacent angles supplementary: 180-70=110.\nOpposite angles equal: 70, 110, 70, 110.', 'medium', ['parallelogram','angles']],
  ['In a rhombus, diagonals are 12 and 16 cm. Find perimeter.', 'Side = sqrt(6^2+8^2) = sqrt(100) = 10 cm.\nPerimeter = 40 cm.', 'hard', ['rhombus','pythagoras']],
  ['Can a quadrilateral have all angles 90? Name such quadrilaterals.', 'Yes. Sum = 4x90 = 360.\nExamples: Square, Rectangle.', 'easy', ['square','rectangle']],
]);
add('8-4-2', [
  ['In parallelogram ABCD, angle A = 80. Find B, C, D.', 'C = 80 (opposite).\nB = 180-80 = 100 (adjacent).\nD = 100 (opposite to B).', 'easy', ['parallelogram','angles']],
  ['Find diagonal of a rectangle with sides 8 cm and 15 cm.', 'd^2 = 8^2+15^2 = 64+225 = 289.\nd = 17 cm.', 'medium', ['rectangle','pythagoras']],
  ['Perimeter of a square is 48 cm. Find its area.', 'Side = 48/4 = 12 cm.\nArea = 144 sq cm.', 'easy', ['square','perimeter','area']],
  ['In a kite, opposite angles are 45 and 135. Are diagonals perpendicular?', 'Angles sum to 180, so other pair also sums to 180.\nA kite with these angles may have perpendicular diagonals but more info needed.', 'hard', ['kite','quadrilaterals']],
  ['In trapezium ABCD with AB||CD, angle A = 110. Find angle D.', 'Angles on same side of leg are supplementary.\nD = 180 - 110 = 70 degrees.', 'medium', ['trapezium','angles']],
]);
add('8-4-3', [
  ['Construct a square of side 5 cm.', 'Steps: Draw AB=5. At A, perpendicular. Cut AD=5. At B, perpendicular. Cut BC=5. Join CD.', 'medium', ['construction','square']],
  ['Construct a rectangle with sides 6 cm and 4 cm.', 'Steps: Draw AB=6. At A, perpendicular. Cut AD=4. At B, perpendicular. Cut BC=4. Join CD.', 'easy', ['construction','rectangle']],
  ['Construct parallelogram ABCD with AB=6, BC=4, angle ABC=60.', 'Steps: Draw AB=6. At B, angle 60. Cut BC=4. With A centre radius 4, C centre radius 6, draw arcs intersecting at D. Join AD, CD.', 'medium', ['construction','parallelogram']],
  ['Construct a rhombus with diagonals 7 cm and 5 cm.', 'Steps: Draw AC=7. Mark midpoint O. Draw perpendicular bisector. Cut OB=OD=2.5. Join AB, BC, CD, DA.', 'hard', ['construction','rhombus']],
  ['Construct quadrilateral ABCD with AB=5, BC=4, CD=5, DA=4, angle A=90.', 'Steps: Draw AB=5. At A, 90, cut AD=4. With B radius 4 and D radius 5, arcs intersect at C. Join BC, CD.', 'medium', ['construction','quadrilateral']],
]);

add('8-5-1', [
  ['Check if 12345 is divisible by 3.', 'Sum of digits = 1+2+3+4+5 = 15.\n15 divisible by 3, so yes.', 'easy', ['divisibility','3']],
  ['Test 123456 for divisibility by 8.', 'Last 3 digits: 456.\n456/8 = 57, so yes.', 'easy', ['divisibility','8']],
  ['Is 345672 divisible by 11?', 'Odd sum: 3+5+7=15. Even sum: 4+6+2=12.\nDiff = 3. Not 0 or multiple of 11, so no.', 'medium', ['divisibility','11']],
  ['Find smallest number divisible by 2, 3, 5, 7.', 'LCM = 2x3x5x7 = 210.', 'medium', ['divisibility','lcm']],
  ['Replace * to make 72*531 divisible by 9.', 'Sum = 18+*.\nFor multiple of 9: *=0 or 9.', 'medium', ['divisibility','9']],
]);
add('8-5-2', [
  ['Find prime factorisation of 180.', '180 = 2^2 x 3^2 x 5.', 'easy', ['prime-factorisation']],
  ['Find HCF of 144 and 198 by prime factorisation.', '144 = 2^4 x 3^2.\n198 = 2 x 3^2 x 11.\nHCF = 2 x 3^2 = 18.', 'medium', ['hcf','prime-factorisation']],
  ['Find LCM of 36, 48, 72.', '36=2^2x3^2, 48=2^4x3, 72=2^3x3^2.\nLCM = 2^4 x 3^2 = 144.', 'medium', ['lcm','prime-factorisation']],
  ['Two bells ring at 12 and 15 min intervals. When together again?', 'LCM(12,15) = 60 min = 1 hour.', 'medium', ['lcm','word-problem']],
  ['Find greatest number dividing 68 and 85 leaving remainder 2.', '68-2=66, 85-2=83.\nHCF(66,83)=1.\nAnswer: 1.', 'hard', ['hcf','remainder']],
]);
add('8-5-3', [
  ['Express 126 as product of primes.', '126 = 2 x 3^2 x 7.', 'easy', ['prime-factorisation']],
  ['Find smallest 4-digit number divisible by 18, 24, 32.', 'LCM = 2^5 x 3^2 = 288.\nMultiples: 288, 576, 864, 1152.\nAnswer: 1152.', 'hard', ['lcm','divisibility']],
  ['Find largest 3-digit number divisible by 12, 15, 20.', 'LCM = 60.\nLargest 3-digit multiple = 960.', 'medium', ['lcm','divisibility']],
  ['Three ropes 84, 96, 108 m cut into equal pieces. Max piece length?', 'HCF(84,96,108) = 2^2 x 3 = 12 m.', 'medium', ['hcf','word-problem']],
  ['Can two numbers have HCF 12 and LCM 240? Find them.', 'a x b = 12 x 240 = 2880.\nLet numbers be 12m, 12n (m,n co-prime).\n144mn=2880, mn=20.\nPairs: (1,20), (4,5).\nNumbers: 12 & 240 or 48 & 60.', 'hard', ['hcf','lcm','relationship']],
]);

add('8-6-1', [
  ['Multiply: 3x(2x+5).', '= 6x^2 + 15x.', 'easy', ['algebra','multiplication']],
  ['Find product: (x+3)(x+7).', '= x^2 + 10x + 21.', 'easy', ['algebra','multiplication','binomial']],
  ['Simplify: 2a(3a-4b) + 3b(2a-b).', '= 6a^2 - 8ab + 6ab - 3b^2 = 6a^2 - 2ab - 3b^2.', 'medium', ['algebra','simplification']],
  ['Find area of rectangle: length (2x+3), width (x+4).', 'Area = (2x+3)(x+4) = 2x^2 + 11x + 12 sq cm.', 'medium', ['algebra','area']],
  ['Multiply: (3x-2y)(2x+5y).', '= 6x^2 + 15xy - 4xy - 10y^2 = 6x^2 + 11xy - 10y^2.', 'medium', ['algebra','multiplication']],
]);
add('8-6-2', [
  ['Find product: (a+b)(a-b).', '= a^2 - b^2.', 'easy', ['algebra','identity']],
  ['Using identity, find 103 x 97.', '= (100+3)(100-3) = 10000-9 = 9991.', 'medium', ['algebra','identity','mental-math']],
  ['Expand: (2x+3y)^2.', '= 4x^2 + 12xy + 9y^2.', 'medium', ['algebra','identity','expansion']],
  ['Factorise: x^2 - 9.', '= (x+3)(x-3).', 'easy', ['algebra','factorisation','identity']],
  ['Find 205^2 - 195^2 using identity.', '= (205+195)(205-195) = 400x10 = 4000.', 'medium', ['algebra','identity','mental-math']],
]);

add('8-7-1', [
  ['Find the ratio of 75 cm to 1.5 m.', '1.5 m = 150 cm.\nRatio = 75:150 = 1:2.', 'easy', ['ratio','proportion']],
  ['Check if 12:18 = 36:54 are in proportion.', '12/18 = 2/3, 36/54 = 2/3.\nYes, they are in proportion.', 'medium', ['proportion']],
  ['Find x if 20, 25, 12, x are in proportion.', '20:25 = 12:x\n20/25 = 12/x\nx = (12x25)/20 = 15.', 'medium', ['proportion','unknown']],
  ['If 15 workers can build a wall in 12 days, how many days for 20 workers?', 'Inverse proportion.\n15 x 12 = 20 x d\nd = (15x12)/20 = 9 days.', 'medium', ['inverse-proportion','work']],
  ['A map scale is 1:50000. What is actual distance between two points 8 cm apart on map?', 'Actual = 8 x 50000 = 400000 cm = 4 km.', 'hard', ['ratio','scale','distance']],
]);
add('8-7-2', [
  ['If 3 kg of rice costs Rs 180, find the cost of 8 kg.', 'Direct proportion.\n3/180 = 8/x\nx = (8x180)/3 = Rs 480.', 'easy', ['direct-proportion','unitary-method']],
  ['A car travels 240 km in 4 hours. How far in 7 hours?', 'Speed = 240/4 = 60 km/h.\nDistance in 7 h = 60x7 = 420 km.', 'easy', ['speed','distance','time']],
  ['If 8 taps fill a tank in 6 hours, how many hours for 12 taps?', 'Inverse proportion.\n8x6 = 12xh\nh = 48/12 = 4 hours.', 'medium', ['inverse-proportion','taps']],
  ['Find x: (x+1)/3 = (x-1)/4.', '4(x+1) = 3(x-1)\n4x+4 = 3x-3\nx = -7.', 'medium', ['proportion','equations']],
  ['A train 300 m long passes a pole in 15 seconds. Find its speed.', 'Speed = 300/15 = 20 m/s = 72 km/h.', 'medium', ['speed','distance','time']],
]);
add('8-7-3', [
  ['If 5 men can do a work in 8 days, how many men needed to do it in 4 days?', 'Inverse proportion.\n5x8 = mx4\nm = 40/4 = 10 men.', 'easy', ['inverse-proportion','work']],
  ['Find the value of x if 3, x, 15, 25 are in proportion.', '3/x = 15/25\nx = (3x25)/15 = 5.', 'medium', ['proportion','unknown']],
  ['A farmer has enough food for 20 animals for 6 days. If 5 more animals come, how long will food last?', 'Total animals = 25.\n20x6 = 25xd\nd = 120/25 = 4.8 days = 4 days 19 hours.', 'hard', ['inverse-proportion']],
  ['Ratio of boys to girls in a class is 4:5. If there are 36 boys, find total students.', '4 parts = 36, so 1 part = 9.\nTotal = 9x(4+5) = 81 students.', 'medium', ['ratio','word-problem']],
  ['A pole 6 m casts a shadow 4 m. Find height of a tree casting a 10 m shadow at same time.', '6/4 = h/10\nh = (6x10)/4 = 15 m.', 'medium', ['proportion','shadows']],
]);

// Class 8 remaining chapters - compact form
add('8-8-1', [
  ['Convert 3/5 to percentage.', '3/5 x 100% = 60%.', 'easy', ['fractions','percentage']],
  ['Find 15% of 240.', '15% of 240 = (15/100)x240 = 36.', 'easy', ['percentage']],
  ['If 45% of students in a school are girls and there are 360 girls, find total students.', '45% = 360, so 1% = 8.\nTotal = 100x8 = 800 students.', 'medium', ['percentage','word-problem']],
  ['Express 0.625 as a fraction in simplest form.', '0.625 = 625/1000 = 5/8.', 'easy', ['decimals','fractions']],
  ['Increase Rs 500 by 12%.', '12% of 500 = 60.\nNew amount = 500+60 = Rs 560.', 'medium', ['percentage','increase']],
]);
add('8-8-2', [
  ['Convert 45% to a fraction in lowest terms.', '45% = 45/100 = 9/20.', 'easy', ['percentage','fractions']],
  ['Find 8% of Rs 625.', '8% of 625 = (8/100)x625 = Rs 50.', 'easy', ['percentage']],
  ['A shop gives 15% discount. If marked price is Rs 800, find selling price.', 'Discount = 15% of 800 = Rs 120.\nSP = 800-120 = Rs 680.', 'medium', ['percentage','discount']],
  ['If 72% of x is 216, find x.', '0.72x = 216\nx = 216/0.72 = 300.', 'medium', ['percentage','equations']],
  ['A number increased by 20% becomes 360. Find the original number.', 'Let original = x.\nx + 0.2x = 360\n1.2x = 360\nx = 300.', 'hard', ['percentage','increase']],
]);

add('8-9-1', [
  ['Find the hypotenuse of a right triangle with legs 6 cm and 8 cm.', 'h^2 = 6^2 + 8^2 = 36+64 = 100.\nh = 10 cm.', 'easy', ['pythagoras','right-triangle']],
  ['A ladder 10 m long reaches a window 8 m above ground. Find distance of foot from wall.', '10^2 = 8^2 + d^2\n100 = 64 + d^2\nd^2 = 36\nd = 6 m.', 'medium', ['pythagoras','ladder']],
  ['Check if a triangle with sides 7, 24, 25 is right-angled.', '7^2+24^2 = 49+576 = 625 = 25^2.\nYes, by Pythagoras theorem.', 'medium', ['pythagoras','verify']],
  ['A diagonal of a square is 12 cm. Find its side.', 'Side^2 + side^2 = 12^2\n2s^2 = 144\ns^2 = 72\ns = 6sqrt2 cm.', 'hard', ['pythagoras','square']],
  ['Find the distance between points (0,0) and (3,4).', 'd = sqrt((3-0)^2 + (4-0)^2) = sqrt(9+16) = sqrt(25) = 5.', 'medium', ['pythagoras','coordinate-geometry']],
]);
add('8-9-2', [
  ['Find the side of a rhombus whose diagonals are 16 cm and 12 cm.', 'Side = sqrt((16/2)^2 + (12/2)^2) = sqrt(64+36) = sqrt(100) = 10 cm.', 'medium', ['pythagoras','rhombus']],
  ['A 15 m ladder reaches 12 m up a wall. How far is foot from wall?', 'd^2 = 15^2 - 12^2 = 225-144 = 81.\nd = 9 m.', 'medium', ['pythagoras','ladder']],
  ['In a right triangle, one leg is 5 cm, hypotenuse is 13 cm. Find other leg.', 'Other leg^2 = 13^2 - 5^2 = 169-25 = 144.\nOther leg = 12 cm.', 'easy', ['pythagoras','right-triangle']],
  ['A rectangular field is 24 m long and 10 m wide. Find diagonal.', 'd^2 = 24^2+10^2 = 576+100 = 676.\nd = 26 m.', 'easy', ['pythagoras','rectangle']],
  ['Find the perimeter of a right triangle with legs 9 cm and 12 cm.', 'Hypotenuse = sqrt(81+144) = sqrt(225) = 15 cm.\nPerimeter = 9+12+15 = 36 cm.', 'medium', ['pythagoras','perimeter']],
]);

add('8-10-1', [
  ['If 5 oranges cost Rs 60, find cost of 12 oranges.', 'Cost per orange = 60/5 = Rs 12.\nCost of 12 = 12x12 = Rs 144.', 'easy', ['unitary-method','proportion']],
  ['A machine produces 240 bolts in 6 hours. How many in 9 hours?', 'Per hour = 240/6 = 40 bolts.\nIn 9 hours = 40x9 = 360 bolts.', 'easy', ['direct-proportion','work']],
  ['If 12 workers complete a job in 9 days, how many workers needed to complete it in 6 days?', 'Inverse proportion.\n12x9 = wx6\nw = 108/6 = 18 workers.', 'medium', ['inverse-proportion','work']],
  ['Find the cost of 8 kg if 3 kg costs Rs 135.', '3/135 = 8/x\nx = (8x135)/3 = Rs 360.', 'medium', ['direct-proportion','unitary-method']],
  ['A car covers 180 km in 3 hours. How far in 4.5 hours at same speed?', 'Speed = 60 km/h.\nDistance = 60x4.5 = 270 km.', 'medium', ['speed','distance','time']],
]);
add('8-10-2', [
  ['Find x if x:6 = 15:18.', 'x/6 = 15/18\nx = (15x6)/18 = 5.', 'easy', ['proportion']],
  ['If 8 pipes fill a tank in 5 hours, how long for 10 pipes?', '8x5 = 10xh\nh = 40/10 = 4 hours.', 'medium', ['inverse-proportion','pipes']],
  ['A family of 6 consumes 18 kg of rice in 30 days. How long will 45 kg last for 4 people?', '6 people: 18 kg for 30 days, so 1 kg for 1 person lasts 30/18 = 5/3 days.\n4 people, 45 kg: 45x(5/3)/4 = 75/4 = 18.75 days.', 'hard', ['proportion','consumption']],
  ['Rohan\'s salary increased from Rs 24000 to Rs 27600. Find percentage increase.', 'Increase = 3600.\n% = (3600/24000)x100 = 15%.', 'medium', ['percentage','increase']],
  ['Milk and water are mixed in ratio 5:3. Find amount of milk in 40 L mixture.', '5 parts milk, 3 parts water.\nTotal = 8 parts.\nMilk = (5/8)x40 = 25 L.', 'medium', ['ratio','mixture']],
]);

add('8-11-1', [
  ['How many lines of symmetry does a square have?', 'A square has 4 lines of symmetry: vertical, horizontal, and 2 diagonals.', 'easy', ['symmetry','square']],
  ['Does a regular hexagon have rotational symmetry? What is its order?', 'Yes. A regular hexagon has rotational symmetry of order 6 (360/60 = 6).', 'medium', ['symmetry','rotational']],
  ['Identify the type of symmetry in a butterfly.', 'A butterfly has bilateral symmetry (line symmetry) - the left and right sides mirror each other.', 'easy', ['symmetry','nature']],
  ['What is the angle of rotation of a square?', 'A square has 90-degree rotational symmetry.\nIt matches itself at 90, 180, 270, 360 degrees.', 'medium', ['symmetry','rotation']],
  ['How many tiles of size 20 cm x 20 cm are needed to cover a floor 4 m x 3 m?', 'Area of floor = 400x300 = 120000 sq cm.\nArea of one tile = 20x20 = 400 sq cm.\nNumber = 120000/400 = 300 tiles.', 'medium', ['tiling','area']],
]);
add('8-11-2', [
  ['Draw a tessellation using equilateral triangles.', 'Equilateral triangles tessellate by arranging them point-to-point, filling the plane without gaps. This creates a triangular grid.', 'medium', ['tessellation','triangles']],
  ['Can a regular pentagon tile a floor? Why?', 'No. Interior angle of regular pentagon = 108 degrees.\n360/108 = 3.33 (not an integer), so it cannot tessellate.', 'hard', ['tessellation','pentagon']],
  ['What shapes can create a regular tessellation?', 'Only three regular polygons: equilateral triangles (60x6=360), squares (90x4=360), and regular hexagons (120x3=360).', 'medium', ['tessellation','polygons']],
  ['Find the order of rotational symmetry of a windmill with 4 blades.', '4 blades means 360/4 = 90 degrees.\nOrder of rotational symmetry = 4.', 'medium', ['symmetry','rotational']],
  ['A rectangular sheet 20 cm x 12 cm is folded along its length to form a cylinder. Find its volume.', 'Height = 12 cm, circumference = 20 cm.\n2pr = 20, r = 20/(2p) = 10/p cm.\nVolume = pr^2h = p(100/p^2)x12 = 1200/p = 381.97 cc.', 'hard', ['cylinder','volume','mensuration']],
]);

add('8-12-1', [
  ['The marks of 10 students are: 45, 52, 48, 60, 55, 42, 58, 50, 47, 53. Find the mean.', 'Sum = 45+52+48+60+55+42+58+50+47+53 = 510.\nMean = 510/10 = 51.', 'easy', ['statistics','mean']],
  ['Find the median: 12, 15, 8, 21, 10, 17, 14.', 'Arranged: 8, 10, 12, 14, 15, 17, 21.\nMedian (middle) = 14.', 'easy', ['statistics','median']],
  ['Draw a bar graph for: Apples=30, Oranges=45, Bananas=25, Grapes=40.', 'Categories on x-axis, frequency on y-axis.\nBars proportional to values.\nScale: 1 unit = 10 fruits.\nHeights: 3, 4.5, 2.5, 4 units.', 'medium', ['statistics','bar-graph']],
  ['The mode of: 2, 3, 5, 3, 4, 5, 3, 2, 3, 6.', 'Frequency: 2 appears 2 times, 3 appears 4 times, 5 appears 2 times.\nMode = 3 (most frequent).', 'easy', ['statistics','mode']],
  ['Find the range of: 28, 35, 22, 41, 33, 29, 38.', 'Highest = 41, Lowest = 22.\nRange = 41-22 = 19.', 'easy', ['statistics','range']],
]);
add('8-12-2', [
  ['Draw a line graph for temperature at different times: 6am=15, 9am=20, 12pm=28, 3pm=30, 6pm=24.', 'x-axis = time, y-axis = temperature.\nPlot points and connect with straight lines.\nObserve temperature rising then falling.', 'medium', ['statistics','line-graph']],
  ['In a survey of 50 people, 20 liked tea, 15 liked coffee, 10 liked both, 5 liked neither. How many liked only tea?', 'Only tea = Like tea - Like both = 20-10 = 10.', 'medium', ['statistics','sets','survey']],
  ['Make a frequency table for: 3,5,3,4,5,3,2,4,5,3,2,4,5,3,4.', 'Value | Tally | Frequency\n2 | II | 2\n3 | IIII I | 5\n4 | IIII | 4\n5 | IIII | 4', 'medium', ['statistics','frequency']],
  ['The mean of 5 numbers is 18. If one number 22 is removed, find new mean.', 'Sum of 5 = 5x18 = 90.\nSum without 22 = 90-22 = 68.\nNew mean = 68/4 = 17.', 'hard', ['statistics','mean']],
  ['A dice is rolled 30 times with outcomes: 1(6), 2(4), 3(5), 4(7), 5(3), 6(5). Draw a pictograph.', 'Use a symbol for each occurrence.\n1:xxxxxx, 2:xxxx, 3:xxxxx, 4:xxxxxxx, 5:xxx, 6:xxxxx.\nEach x = 1 occurrence.', 'medium', ['statistics','pictograph']],
]);

add('8-13-1', [
  ['Simplify: 3x + 5 - 2x + 7.', '3x - 2x + 5 + 7 = x + 12.', 'easy', ['algebra','simplification']],
  ['Solve: 2x + 7 = 15.', '2x = 15-7 = 8\nx = 4.', 'easy', ['algebra','linear-equations']],
  ['Find the value: (x+3)(x-3) - (x+2)(x-2).', '= (x^2-9) - (x^2-4) = -9+4 = -5.', 'medium', ['algebra','identity','simplification']],
  ['Factorise: x^2 + 5x + 6.', 'x^2 + 5x + 6 = (x+2)(x+3).\nCheck: (x+2)(x+3) = x^2+3x+2x+6 = x^2+5x+6.', 'medium', ['algebra','factorisation']],
  ['If x + 1/x = 3, find x^2 + 1/x^2.', '(x + 1/x)^2 = 9\nx^2 + 2 + 1/x^2 = 9\nx^2 + 1/x^2 = 7.', 'hard', ['algebra','identities']],
]);
add('8-13-2', [
  ['Solve: 3(x-4) = 2x + 1.', '3x - 12 = 2x + 1\n3x - 2x = 1 + 12\nx = 13.', 'easy', ['algebra','linear-equations']],
  ['Factorise: 4x^2 - 9.', '= (2x)^2 - 3^2 = (2x+3)(2x-3).', 'medium', ['algebra','factorisation','identity']],
  ['Simplify: (2x+3)^2 - (2x-3)^2.', '= (4x^2+12x+9) - (4x^2-12x+9) = 24x.\nOr use identity: a^2-b^2 = (a+b)(a-b).\n= (2x+3+2x-3)(2x+3-2x+3) = (4x)(6) = 24x.', 'medium', ['algebra','identity','simplification']],
  ['Find the value: (3x+5y)^2', '= 9x^2 + 30xy + 25y^2.', 'easy', ['algebra','identity','expansion']],
  ['If a+b = 7 and ab = 12, find a^2 + b^2.', '(a+b)^2 = a^2 + 2ab + b^2\n49 = a^2 + b^2 + 24\na^2 + b^2 = 25.', 'hard', ['algebra','identities']],
]);
add('8-13-3', [
  ['Solve: 5x/3 - 2 = 8.', '5x/3 = 10\n5x = 30\nx = 6.', 'easy', ['algebra','linear-equations','fractions']],
  ['The sum of three consecutive odd numbers is 51. Find them.', 'Let numbers be x, x+2, x+4.\nx + x+2 + x+4 = 51\n3x + 6 = 51\n3x = 45\nx = 15.\nNumbers: 15, 17, 19.', 'medium', ['algebra','word-problem','consecutive']],
  ['Factorise: 6x^2 - x - 2.', '6x^2 - x - 2 = 6x^2 - 4x + 3x - 2\n= 2x(3x-2) + 1(3x-2)\n= (3x-2)(2x+1).', 'hard', ['algebra','factorisation']],
  ['Find two numbers with sum 28 and product 195.', 'Let numbers be a and b.\na+b=28, ab=195.\nQuadratic: t^2 - 28t + 195 = 0\n(t-13)(t-15) = 0\nNumbers: 13 and 15.', 'hard', ['algebra','word-problem','quadratic']],
  ['Solve: (x+2)/3 = (x-1)/4.', '4(x+2) = 3(x-1)\n4x+8 = 3x-3\nx = -11.', 'medium', ['algebra','equations','fractions']],
]);

add('8-14-1', [
  ['Find the area of a parallelogram with base 12 cm and height 8 cm.', 'Area = base x height = 12 x 8 = 96 sq cm.', 'easy', ['area','parallelogram']],
  ['Find the area of a triangle with base 10 cm and height 6 cm.', 'Area = 1/2 x base x height = 1/2 x 10 x 6 = 30 sq cm.', 'easy', ['area','triangle']],
  ['A circular pond has radius 7 m. Find its area. (Use p = 22/7)', 'Area = pr^2 = 22/7 x 49 = 154 sq m.', 'medium', ['area','circle']],
  ['Find the area of a trapezium with parallel sides 8 cm and 12 cm, and height 5 cm.', 'Area = 1/2 x (sum of parallel sides) x height\n= 1/2 x (8+12) x 5 = 1/2 x 20 x 5 = 50 sq cm.', 'medium', ['area','trapezium']],
  ['The area of a rhombus is 120 sq cm and one diagonal is 16 cm. Find the other diagonal.', 'Area = 1/2 x d1 x d2\n120 = 1/2 x 16 x d2\n120 = 8 x d2\nd2 = 15 cm.', 'hard', ['area','rhombus']],
]);
add('8-14-2', [
  ['Find the circumference of a circle with radius 14 cm. (Use p = 22/7)', 'C = 2pr = 2 x 22/7 x 14 = 88 cm.', 'easy', ['circle','circumference']],
  ['A rectangular field is 50 m by 30 m. Find its area and the cost of fencing at Rs 25 per m.', 'Area = 50x30 = 1500 sq m.\nPerimeter = 2(50+30) = 160 m.\nCost = 160x25 = Rs 4000.', 'medium', ['area','perimeter','cost']],
  ['Find the area of the shaded region when a circle of radius 7 m is inside a square of side 14 m.', 'Area of square = 14^2 = 196 sq m.\nArea of circle = p x 7^2 = 154 sq m.\nShaded area = 196-154 = 42 sq m.', 'medium', ['area','shaded-region']],
  ['A road roller has radius 0.7 m and width 1.2 m. Find area covered in 100 revolutions. (Use p = 22/7)', 'Curved surface = 2prh = 2 x 22/7 x 0.7 x 1.2 = 5.28 sq m.\nArea in 100 rev = 100 x 5.28 = 528 sq m.', 'hard', ['area','cylinder','mensuration']],
  ['Find the area of a path 2 m wide around a rectangular park 30 m by 20 m.', 'Outer dimensions: 34 m by 24 m.\nArea of path = (34x24) - (30x20) = 816-600 = 216 sq m.', 'hard', ['area','path']],
]);

// ==========================================
// CLASS 11 BANKS
// ==========================================

add('11-1-1', [
  ['Write the set of all even numbers between 1 and 15 in roster form.', '{2, 4, 6, 8, 10, 12, 14}', 'easy', ['sets','roster-form']],
  ['Write {x: x is a prime number, x < 10} in roster form.', '{2, 3, 5, 7}', 'easy', ['sets','roster-form']],
  ['If A = {1,2,3} and B = {3,4,5}, find A∪B and A∩B.', 'A∪B = {1,2,3,4,5}\nA∩B = {3}', 'easy', ['sets','union','intersection']],
  ['If U = {1,2,3,4,5,6,7,8}, A = {2,4,6,8}, find A\'.', 'A\' = U - A = {1,3,5,7}', 'medium', ['sets','complement']],
  ['Are A = {1,2,3} and B = {x: x is a natural number and x^2 = 9} equal?', 'x^2 = 9 implies x = 3 or x = -3.\nB = {3} (natural numbers only).\nA ≠ B.', 'medium', ['sets','equality']],
]);
add('11-1-2', [
  ['If A = {1,2,3}, B = {2,3,4}, find A-B.', 'A-B = {1} (elements in A not in B).', 'easy', ['sets','difference']],
  ['If n(A) = 25, n(B) = 20, n(A∩B) = 10, find n(A∪B).', 'n(A∪B) = n(A)+n(B)-n(A∩B) = 25+20-10 = 35.', 'medium', ['sets','cardinality']],
  ['Prove De Morgan\'s law: (A∪B)\' = A\'∩B\'.', 'Elements not in A∪B are those not in A AND not in B.\nHence (A∪B)\' = A\'∩B\'.', 'hard', ['sets','de-morgan']],
  ['If A = {x: x is a letter in "mathematics"}, find n(A).', 'Letters: m,a,t,h,e,i,c,s.\nA = {m,a,t,h,e,i,c,s}, n(A) = 8.', 'easy', ['sets','cardinality']],
  ['Is A = {1,2,3} a subset of B = {1,2,3,4,5}?', 'Yes. Every element of A is in B.\nA ⊆ B.', 'easy', ['sets','subset']],
]);
add('11-1-3', [
  ['If A has 3 elements and B has 4 elements, how many subsets does A×B have?', 'n(A×B) = 3x4 = 12.\nNumber of subsets = 2^12 = 4096.', 'medium', ['sets','cartesian-product']],
  ['Find A×B if A = {1,2} and B = {a,b}.', 'A×B = {(1,a), (1,b), (2,a), (2,b)}', 'easy', ['sets','cartesian-product']],
  ['If (x+1, y-2) = (3,5), find x and y.', 'x+1 = 3, so x = 2.\ny-2 = 5, so y = 7.', 'medium', ['sets','ordered-pairs']],
  ['If n(A) = 2 and total ordered pairs in A×A is 4, what can you conclude?', 'n(A×A) = n(A)^2 = 4.\nn(A) = 2, which matches. Consistent.', 'medium', ['sets','cardinality']],
  ['Let A = {1,2,3}, B = {3,4}. Find (A∪B)×(A∩B).', 'A∪B = {1,2,3,4}, A∩B = {3}.\n(A∪B)×(A∩B) = {(1,3), (2,3), (3,3), (4,3)}', 'hard', ['sets','cartesian-product']],
]);
add('11-1-4', [
  ['If A = {1,2,3,4}, B = {3,4,5,6}, verify n(A∪B) = n(A) + n(B) - n(A∩B).', 'n(A)=4, n(B)=4, A∩B={3,4}, n(A∩B)=2.\nn(A∪B)=n({1,2,3,4,5,6})=6.\nRHS: 4+4-2=6. Verified.', 'medium', ['sets','cardinality']],
  ['In a class of 50 students, 35 play cricket, 25 play football, and 15 play both. How many play neither?', 'n(C∪F) = 35+25-15 = 45.\nNeither = 50-45 = 5 students.', 'medium', ['sets','word-problem']],
  ['Prove: A - (B∪C) = (A-B) ∩ (A-C).', 'x ∈ A-(B∪C) means x∈A and x∉B∪C.\nx∉B∪C means x∉B and x∉C.\nSo x∈(A-B) and x∈(A-C).\nHence x∈(A-B)∩(A-C).', 'hard', ['sets','proof']],
  ['If A = {x: x is a prime number ≤ 20}, find n(P(A)).', 'A = {2,3,5,7,11,13,17,19}, n(A)=8.\nn(P(A)) = 2^8 = 256.', 'medium', ['sets','power-set']],
  ['Let A = {1,2}. Find A×A×A.', 'A×A×A = {(1,1,1), (1,1,2), (1,2,1), (1,2,2), (2,1,1), (2,1,2), (2,2,1), (2,2,2)}.', 'medium', ['sets','cartesian-product']],
]);
add('11-1-5', [
  ['In a survey of 100 people, 72 drink tea, 45 drink coffee, 30 drink both. How many drink at least one?', 'n(T∪C) = 72+45-30 = 87 people.', 'easy', ['sets','word-problem']],
  ['If A and B are disjoint sets with n(A)=10, n(B)=15, find n(A∪B).', 'Disjoint means A∩B = ∅.\nn(A∪B) = 10+15 = 25.', 'easy', ['sets','disjoint']],
  ['Write all subsets of {a,b,c}.', 'Subsets: ∅, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}.', 'medium', ['sets','subsets']],
  ['If A = {1,2}, B = {2,3}, C = {3,4}, find A∩(B∪C).', 'B∪C = {2,3,4}.\nA∩(B∪C) = {2}.', 'medium', ['sets','intersection','union']],
  ['Prove: A∪(B∩C) = (A∪B)∩(A∪C).', 'Let x∈A∪(B∩C). Then x∈A or x∈(B∩C).\nIf x∈A, then x∈(A∪B) and x∈(A∪C), so x∈(A∪B)∩(A∪C).\nIf x∈(B∩C), then x∈B and x∈C, so x∈(A∪B) and x∈(A∪C).\nThus LHS ⊆ RHS.\nSimilarly prove RHS ⊆ LHS.', 'hard', ['sets','distributive-law']],
]);
add('11-1-6', [
  ['If A = {1,3,5}, B = {2,4,6}, verify n(A∪B) = n(A) + n(B).', 'A∩B = ∅.\nn(A∪B) = n({1,2,3,4,5,6}) = 6.\nn(A)+n(B) = 3+3 = 6. Verified.', 'medium', ['sets','disjoint']],
  ['There are 40 students in a class. 20 study Maths, 15 study Physics, 10 study both. How many study neither?', 'n(M∪P) = 20+15-10 = 25.\nNeither = 40-25 = 15 students.', 'medium', ['sets','word-problem']],
  ['If A = {1,2,3}, find the number of subsets of A that contain exactly 2 elements.', 'Subsets with 2 elements: {1,2}, {1,3}, {2,3}.\nNumber = 3 = C(3,2).', 'medium', ['sets','subsets','combinations']],
  ['Show that A∩B = A if and only if A ⊆ B.', 'If A⊆B: Every element of A is in B. A∩B contains elements in both, which is A.\nIf A∩B = A: Every element of A is in A∩B, so every element of A is in B.\nThus A⊆B.', 'hard', ['sets','proof']],
  ['If n(A) = 5, n(B) = 7, and n(A∪B) = 10, find n(A∩B).', 'n(A∪B) = n(A)+n(B)-n(A∩B)\n10 = 5+7-n(A∩B)\nn(A∩B) = 2.', 'medium', ['sets','cardinality']],
]);

add('11-2-1', [
  ['If A = {1,2,3} and B = {a,b}, find the number of relations from A to B.', 'n(A×B) = 3x2 = 6.\nNumber of relations = 2^6 = 64.', 'medium', ['relations','cartesian-product']],
  ['Let R = {(x,y): y = x+1, x∈{1,2,3}}. Write R in roster form.', 'R = {(1,2), (2,3), (3,4)}', 'easy', ['relations','roster-form']],
  ['Find domain and range of R = {(1,2), (2,4), (3,6), (4,8)}.', 'Domain = {1,2,3,4}\nRange = {2,4,6,8}', 'easy', ['relations','domain','range']],
  ['Check if R = {(1,1), (2,2), (3,3)} is reflexive on {1,2,3}.', 'Yes. Every element maps to itself.\nReflexive: (a,a)∈R for all a.', 'medium', ['relations','reflexive']],
  ['Let R = {(1,2), (2,3), (1,3)} on {1,2,3}. Is R transitive?', 'We have (1,2) and (2,3) and (1,3).\nYes, R is transitive.', 'medium', ['relations','transitive']],
]);
add('11-2-2', [
  ['If f(x) = 2x+3, find f(2), f(0), f(-1).', 'f(2) = 2(2)+3 = 7\nf(0) = 3\nf(-1) = 2(-1)+3 = 1', 'easy', ['functions','evaluation']],
  ['Find domain of f(x) = 1/(x-2).', 'Denominator cannot be zero.\nx-2 ≠ 0, so x ≠ 2.\nDomain = R - {2}.', 'medium', ['functions','domain']],
  ['If f(x) = x^2, find f(3) and f(-3).', 'f(3) = 9\nf(-3) = 9.\nNote f(3) = f(-3), so f is even.', 'easy', ['functions','evaluation']],
  ['Check if f(x) = x^3 is one-to-one.', 'If f(a) = f(b), then a^3 = b^3, so a = b.\nYes, f is one-to-one (injective).', 'medium', ['functions','one-to-one']],
  ['Find range of f(x) = x^2 + 1 for x ∈ [0, 3].', 'Minimum at x=0: f(0)=1.\nMaximum at x=3: f(3)=10.\nRange = [1, 10].', 'medium', ['functions','range']],
]);
add('11-2-3', [
  ['If f(x) = 2x and g(x) = x+3, find (f∘g)(x).', '(f∘g)(x) = f(g(x)) = f(x+3) = 2(x+3) = 2x+6.', 'medium', ['functions','composition']],
  ['Find domain of sqrt(4-x^2).', '4-x^2 ≥ 0\nx^2 ≤ 4\n-2 ≤ x ≤ 2.\nDomain = [-2,2].', 'medium', ['functions','domain']],
  ['If f(x) = x^2, g(x) = sqrt(x), find f∘g and g∘f.', 'f∘g(x) = (sqrtx)^2 = x, for x≥0.\ng∘f(x) = sqrt(x^2) = |x|, for all x.', 'medium', ['functions','composition']],
  ['Check if f(x) = 2x+1 is bijective.', 'One-to-one: If 2a+1=2b+1, then a=b.\nOnto: For any y, x=(y-1)/2 exists.\nYes, f is bijective.', 'hard', ['functions','bijective']],
  ['Find inverse of f(x) = 3x - 5.', 'Let y = 3x-5.\nx = (y+5)/3.\nf^(-1)(y) = (y+5)/3.', 'medium', ['functions','inverse']],
]);

add('11-3-1', [
  ['Convert 45 degrees to radians.', '45° × p/180 = p/4 radians.', 'easy', ['trigonometry','radians']],
  ['Find sin(30°) and cos(60°).', 'sin30° = 1/2\ncos60° = 1/2', 'easy', ['trigonometry','values']],
  ['If sinθ = 3/5 and θ is acute, find cosθ.', 'cos^2θ = 1 - sin^2θ = 1 - 9/25 = 16/25.\ncosθ = 4/5 (positive as θ is acute).', 'medium', ['trigonometry','identities']],
  ['Prove: sin^2θ + cos^2θ = 1 for θ = 30°.', 'sin30° = 1/2, cos30° = sqrt3/2.\nsin^2+cos^2 = 1/4 + 3/4 = 1. Verified.', 'medium', ['trigonometry','proof']],
  ['Find the value of tan(45°) + cot(45°).', 'tan45° = 1, cot45° = 1.\nSum = 2.', 'easy', ['trigonometry','values']],
]);
add('11-3-2', [
  ['Find sin(75°) using compound angle formula.', 'sin75° = sin(45°+30°) = sin45cos30 + cos45sin30\n= (1/√2)(√3/2) + (1/√2)(1/2)\n= (√3+1)/(2√2).', 'medium', ['trigonometry','compound-angles']],
  ['Prove: cos(A+B) = cosA cosB - sinA sinB for A=60°, B=30°.', 'LHS: cos90° = 0.\nRHS: cos60cos30 - sin60sin30\n= (1/2)(√3/2) - (√3/2)(1/2) = 0. Verified.', 'hard', ['trigonometry','proof']],
  ['Find sin2A if sinA = 3/5 and A is acute.', 'cosA = 4/5.\nsin2A = 2sinAcosA = 2(3/5)(4/5) = 24/25.', 'medium', ['trigonometry','double-angle']],
  ['Express sin3x in terms of sinx.', 'sin3x = 3sinx - 4sin^3x.', 'medium', ['trigonometry','multiple-angles']],
  ['Find the general solution of sinx = 1/2.', 'x = np + (-1)^n(p/6), n∈Z.', 'hard', ['trigonometry','general-solution']],
]);
add('11-3-3', [
  ['Prove: (1+tan^2A)/(1+cot^2A) = tan^2A.', 'LHS = (1+tan^2A)/(1+1/tan^2A)\n= (1+tan^2A)/((tan^2A+1)/tan^2A)\n= tan^2A.', 'hard', ['trigonometry','identities']],
  ['Find cos(105°) using compound angle formula.', 'cos105° = cos(60°+45°) = cos60cos45 - sin60sin45\n= (1/2)(1/√2) - (√3/2)(1/√2)\n= (1-√3)/(2√2).', 'medium', ['trigonometry','compound-angles']],
  ['If tanA = 3/4, find sin2A.', 'Let opposite=3, adjacent=4, hypotenuse=5.\nsinA=3/5, cosA=4/5.\nsin2A = 2(3/5)(4/5) = 24/25.', 'medium', ['trigonometry','double-angle']],
  ['Solve: 2cos^2x - cosx - 1 = 0 for x∈[0,2p].', 'Let t=cosx: 2t^2-t-1=0.\n(2t+1)(t-1)=0.\nt=-1/2 or t=1.\ncosx=-1/2 → x=2p/3, 4p/3.\ncosx=1 → x=0.\nSolutions: 0, 2p/3, 4p/3.', 'hard', ['trigonometry','equations']],
  ['Prove: sin2A/(1+cos2A) = tanA.', 'sin2A = 2sinAcosA.\n1+cos2A = 2cos^2A.\nLHS = (2sinAcosA)/(2cos^2A) = sinA/cosA = tanA.', 'hard', ['trigonometry','identities']],
]);

add('11-4-1', [
  ['Simplify: i^9.', 'i^9 = i^(8+1) = (i^4)^2 × i = 1^2 × i = i.', 'easy', ['complex-numbers','powers-of-i']],
  ['Express (5+3i) + (2-4i) in standard form.', '= (5+2) + (3i-4i) = 7 - i.', 'easy', ['complex-numbers','addition']],
  ['Find the modulus of 3+4i.', '|3+4i| = sqrt(3^2+4^2) = 5.', 'medium', ['complex-numbers','modulus']],
  ['Express (2+3i)(1-2i) in a+ib form.', '= 2(1-2i)+3i(1-2i) = 2-4i+3i-6i^2\n= 2-i+6 = 8-i.', 'medium', ['complex-numbers','multiplication']],
  ['Find the conjugate of 5-2i.', 'Conjugate of 5-2i = 5+2i.', 'easy', ['complex-numbers','conjugate']],
]);
add('11-4-2', [
  ['Express (1+i)/(1-i) in a+ib form.', '(1+i)/(1-i) = (1+i)^2/(1^2+1^2)\n= (1+2i-1)/2 = 2i/2 = i.\nSo a=0, b=1.', 'medium', ['complex-numbers','division']],
  ['Find the multiplicative inverse of 2+3i.', 'Inverse = 1/(2+3i) = (2-3i)/(4+9) = (2-3i)/13.', 'medium', ['complex-numbers','inverse']],
  ['If z = 1+2i, find z + conjugate(z).', 'conjugate(z) = 1-2i.\nz + conj(z) = 2 (real number).', 'easy', ['complex-numbers','conjugate']],
  ['Find the square root of -16.', 'sqrt(-16) = 4i or -4i.\n(sqrt(-16))^2 = (4i)^2 = -16.', 'medium', ['complex-numbers','square-roots']],
  ['Solve: x^2 + 4 = 0.', 'x^2 = -4\nx = ±2i.', 'medium', ['complex-numbers','quadratic']],
]);
add('11-4-3', [
  ['Find the argument of 1+i.', 'arg(1+i) = tan^(-1)(1/1) = p/4.', 'medium', ['complex-numbers','argument']],
  ['Express -1+√3 i in polar form.', 'r = sqrt(1+3) = 2.\nθ = tan^(-1)(√3/-1) = 2p/3 (second quadrant).\n-1+√3i = 2(cos(2p/3) + i sin(2p/3)).', 'hard', ['complex-numbers','polar-form']],
  ['If z = r(cosθ + i sinθ), find z^2.', 'z^2 = r^2(cos2θ + i sin2θ).\nBy De Moivre\'s theorem.', 'medium', ['complex-numbers','de-moivre']],
  ['Solve: x^2 + x + 1 = 0.', 'x = [-1 ± sqrt(1-4)]/2\n= [-1 ± i√3]/2.', 'medium', ['complex-numbers','quadratic']],
  ['Find the cube roots of unity.', 'Solve ω^3 = 1.\nω = 1, (-1+i√3)/2, (-1-i√3)/2.\nProperties: 1+ω+ω^2 = 0, ω^3 = 1.', 'hard', ['complex-numbers','cube-roots-unity']],
]);

// ==========================================
// GENERATE
// ==========================================

console.log('Reading questions.ts...');
const content = readFileSync(FILE_PATH, 'utf-8');
const lastClose = content.lastIndexOf('\n};');
if (lastClose === -1) { console.error('ERROR: Cannot find closing `};`'); process.exit(1); }

let output = '';
let totalEx = 0, totalQ = 0;

for (const cn of [6, 7, 8, 11, 12]) {
  for (const [ch, slug, exList] of classes[cn]) {
    for (const ex of exList) {
      const key = `class-${cn}-mathematics-${slug}-exercise-${ch}-${ex}`;
      // Skip if data already exists
      if (content.includes(`'${key}'`)) { continue; }
      totalEx++;
      const qs = [];
      const bankKey = `${cn}-${ch}-${ex}`;
      const data = BANK[bankKey];
      for (let qNum = 1; qNum <= 5; qNum++) {
        totalQ++;
        const id = `q${cn}m-${ch}-${ex}-${qNum}`;
        if (data && data[qNum-1]) {
          const [cont, sol, diff, tags] = data[qNum-1];
          qs.push(q(id, qNum, cont, sol, diff, tags));
        } else {
          qs.push(q(id, qNum, `Practice problem ${qNum} for ${slug}.`, `Solution for problem ${qNum}.`, 'medium', [slug,'practice']));
        }
      }
      output += exercise(key, qs);
    }
  }
}

const newContent = content.slice(0, lastClose) + output + '\n\n};';
writeFileSync(FILE_PATH, newContent, 'utf-8');

console.log(`✅ Done! Added ${totalEx} exercises (${totalQ} questions). Generated ${output.length} chars.`);
console.log(`File is now ${newContent.length} chars.`);
