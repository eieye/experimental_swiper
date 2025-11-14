/* IMPORT GLYPH-CSV FROM INVENTORY(GLYPHID) */
/* REVIEWED 31OCT25 / COPY OF "IMAGE WEB 2025OCT29 ALPHA SWIPER SHADOW" */
var DEBUG = true;
console.log("GLYPHS INVENTORY (9) \t// FRI 10-NOV-23");

const inventory = {
alc: 
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   a_lc EDIT 28AUG23
 1,  624,    0,  TBUR,   typebox upper right
 2,  624, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  624,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  624,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  624,  321,  VHR,    cap-height (right)
10,   94,    0,  SPCL,   space left (Vorbreite)
11,  495,    0,  SPCR,   space right (Nachbreite)
12,  494,  594,   a1,    anchor 1
13,  454,  518,   c1,    control 1
14,  379,  480,   c2,    control 2
15,  310,  480,   a2,    anchor 2
16,  310,  480,   a3,    anchor 3
17,  211,  480,   c3,    control 3
18,  94,   565,   c4,    control 4
19,  94,   728.5, a4,    anchor 4
20,  94,   728.5, a5,    anchor 5
21,  94,   901,   c5,    control 5
22,  211,  984,   c6,    control 6
23,  310,  984,   a6,    anchor 6
24,  310,  984,   a7,    anchor 7
25,  380,  984,   c7,    control 7
26,  455,  947,   c8,    control 8
27,  494,  867,   a8,    anchor 8
28,  495,  486,   a9,    anchor 9
29,  495,  586,   c9,    control 9 Y+100
30,  495, 880.5,  c10,   control 10 Y-100
31,  495, 980.5,  a10,   anchor 10`,
aaltlc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   a_lc##alt## REVISION2 29AUG23
 1,  624,    0,  TBUR,   typebox upper right
 2,  624, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  624,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  624,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  624,  321,  VHR,    cap-height (right)
10,  120,    0,  SPCL,   space left (Vorbreite)
11,  481,    0,  SPCR,   space right (Nachbreite)
12,  148,  542,   a1,    anchor 1
13,  180,  511,   c1,    control 1
14,  234,  478,   c2,    control 2
15,  302,  478,   a2,    anchor 2
16,  302,  478,   a3,    anchor 3
17,  384,  478,   c3,    control 3
18,  477,  528,   c4,    control 4
19,  478,  663,   a4,    anchor 4
20,  478,  663,   a5,    anchor 5
21,  479,  752,   c5,    control 5
22,  481,  904,   c6,    control 6
23,  481,  980,   a6,    anchor 6
24,  476,  690,   a7,    anchor 7 ##SEGMENT2##
25,  445,  692,   c7,    control 7
26,  381,  696,   c8,    control 8 #-#
27,  334,  698,   a8,    anchor 8 #.#
28,  334,  698,   a9,    anchor 9 #.#
29,  228,  706,   c9,    control 9 #-#
30,  121,  743,   c10,   control 10
31,  121,  847,   a10,   anchor 10
32,  121,  847,   a11,   anchor 11
33,  121,  937,   c11,   control 11
34,  198,  985,   c12,   control 12
35,  274,  985,   a12,   anchor 12
36,  274,  985,   a13,   anchor 13
37,  363,  985,   c13,   control 13
38,  438,  921,   c14,   control 14
39,  477,  876,   a14,   anchor 14`,
auc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   a3_uc EDIT 28AUG23
 1,  675,    0,  TBUR,   typebox upper right
 2,  675, 1480, TBLR,    typebox lower right
 3,    0, 1480, TBLL,    typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  675,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  675,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  675,  321,  VHR,    cap-height (right)
10,   70,    0,  SPCL,   space left (Vorbreite)
11,  605.5,  0,  SPCR,   space right (Nachbreite)
12,   70,  985.5,  a1,   anchor 1
13,   90,  935.5,  c1,   control 1
14,  317.5,  368,  c2,   control 2
15,  337.5,  318,  a2,   anchor 2
16,  337.5,  318,  a3,   anchor 3
17,  357.5,  368,  c3,   control 3
18, 585.5, 935.5,  c4,   control 4
19, 605.5, 985.5,  a4,   anchor 4
20,  153,  784,   a5,    anchor 5
21,  253,  784,   c5,    control 5
22,  422,  784,   c6,    control 6
23,  522,  784,   a6,    anchor 6`,
aumluc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   auml_uc REV 03SEP23
 1,  675,    0,  TBUR,   typebox upper right
 2,  675, 1480, TBLR,    typebox lower right
 3,    0, 1480, TBLL,    typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  675,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  675,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  675,  321,  VHR,    cap-height (right)
10,   70,    0,  SPCL,   space left (Vorbreite)
11,  605.5,  0,  SPCR,   space right (Nachbreite)
12,   70,  985.5,  a1,   anchor 1
13,   90,  935.5,  c1,   control 1
14,  317.5,  368,  c2,   control 2
15,  337.5,  318,  a2,   anchor 2
16,  337.5,  318,  a3,   anchor 3
17,  357.5,  368,  c3,   control 3
18, 585.5, 935.5,  c4,   control 4
19, 605.5, 985.5,  a4,   anchor 4
20,  153,  784,   a5,    anchor 5
21,  253,  784,   c5,    control 5
22,  422,  784,   c6,    control 6
23,  522,  784,   a6,    anchor 6
24,  232,  120.5, a7,    anchor 7 DIA#TEMP#
25,  234,  118.5, c7,    control 7
26, 239.5, 115.5, c8,    control 8
27, 241.5, 113.5, a8,    anchor 8
28,  433,  120.5, a9,    anchor 9 DIA#TEMP#
29,  435,  118.5, c9,    control 9
30, 440.5, 115.5, c10,   control 10
31, 442.5, 113.5, a10,   anchor 10`,
blc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   b_lc XY+-100
 1,  634,    0,  TBUR,   typebox upper right
 2,  634, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,   BLL,   baseline (left)
 5,  634,  982,   BLR,   baseline (right)
 6,    0,  481,   XHL,   x-height (left)
 7,  634,  481,   XHR,   x-height (right)
 8,    0,  321,   VHL,   cap-height (left)
 9,  634,  321,   VHR,   cap-height (right)
10,  142,    0,  SPCL,   space left (Vorbreite)
11,  542.5,  0,  SPCR,   space right (Nachbreite)
12,  142, 270.5,  a1,    anchor 1
13,  142, 370.5,  c1,    control 1
14,  142, 880.5,  c2,    control 2
15,  142, 980.5,  a2,    anchor 2
16, 142.5, 594,   a3,    anchor 3
17,  185,  518,   c3,    control 3
18,  259,  480,   c4,    control 4
19, 326.5, 480,   a4,    anchor 4
20, 326.5, 480,   a5,    anchor 5
21,  427,  480,   c5,    control 5
22, 542.5, 565,   c6,    control 6
23, 542.5, 728.5, a6,    anchor 6
24, 542.5, 728.5, a7,    anchor 7
25, 542.5, 901,   c7,    control 7
26,  427,  984,   c8,    control 8
27, 326.5, 984,   a8,    anchor 8
28, 326.5, 984,   a9,    anchor 9
29,  260,  984,   c9,    control 9
30,  185,  946,   c10,   control 10
31,  142,  868,   a10,   anchor 10`,
buc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   b3_uc XY+-100 adaptive
 1,  678,    0,  TBUR,   typebox upper right
 2,  678, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  678,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  678,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  678,  321,  VHR,    cap-height (right)
10, 148.5,   0,  SPCL,   space left (Vorbreite)
11,  575,    0,  SPCR,   space right (Nachbreite)
12, 148.5, 321,   a1,    anchor 1
13, 148.5, 421,   c1,    control 1 Y+100
14, 148.5, 882,   c2,    control 2 Y-100
15, 148.5, 982,   a2,    anchor 2
16, 149.5, 321,   a3,    anchor 3
17, 249.5, 321,   c3,    control 3 X+100 (!DIST)
18,  277,  321.5, c4,    control 4 X-100 (!DIST)
19,  377,  321.5, a4,    anchor 4
20,  377,  321.5, a5,    anchor 5
21,  450,  321.5, c5,    control 5
22,  541,  378,   c6,    control 6
23,  541, 475.5,  a6,    anchor 6
24,  541, 475.5,  a7,    anchor 7
25,  541,  555,   c7,    control 7
26,  467,  631,   c8,    control 8
27,  376,  631,   a8,    anchor 8
28,  376,  631,   a9,    anchor 9
29,  276,  631,   c9,    control 9 X-100 (!DIST)
30, 249.5, 631,   c10,   control 10 X+100 (!DIST)
31, 149.5, 631,   a10,   anchor 10
32,  388,  631,   a11,   anchor 11
33,  488,  631,   c11,   control 11
34,  575,  707,   c12,   control 12
35,  575, 805.5,  a12,   anchor 12
36,  575, 805.5,  a13,   anchor 13
37,  575,  900,   c13,   control 13
38,  492, 981.5,  c14,   control 14
39, 389.5, 981.5, a14,   anchor 14
40, 389.5, 981.5, a15,   anchor 15
41, 289.5, 981.5, c15,   control 15 X-100 (!DIST)
42, 249.5, 982,   c16,   control 16 X+100 (!DIST)
43, 149.5, 982,   a16,   anchor 16`,
clc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   c_lc (080823)
 1,  550,    0,  TBUR,   typebox upper right
 2,  550, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  550,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  550,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  550,  321,  VHR,    cap-height (right)
10,   91,    0,  SPCL,   space left (Vorbreite)
11,  481.5,  0,  SPCR,   space right (Nachbreite)
12, 468.5, 561,   a1,    anchor 1
13,  427,  507,   c1,    control 1
14,  365,  480,   c2,    control 2
15,  307,  480,   a2,    anchor 2
16,  307,  480,   a3,    anchor 3
17,  208,  480,   c3,    control 3
18,  91,   565,   c4,    control 4
19,  91,   728.5, a4,    anchor 4
20,  91,   728.5, a5,    anchor 5
21,  91,   901,   c5,    control 5
22,  208,  984,   c6,    control 6
23,  307,  984,   a6,    anchor 6
24,  307,  984,   a7,    anchor 7
25,  371,  984,   c7,    control 7
26,  440,  953,   c8,    control 8
27, 481.5, 885,   a8,    anchor 8`,
cuc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   c_uc (100823)
 1,  632,    0,  TBUR,   typebox upper right
 2,  632,  1480, TBLR,   typebox lower right
 3,    0,  1480, TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  632,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  632,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  632,  321,  VHR,    cap-height (right)
10,   51.5,  0,  SPCL,   space left (Vorbreite)
11,  555.5,  0,  SPCR,   space right (Nachbreite)
12,  550,  417,   a1,    anchor 1
13,  495,  344,   c1,    control 1
14,  415,  307.5, c2,    control 2
15, 338.5, 307.5, a2,    anchor 2
16, 338.5, 307.5, a3,    anchor 3
17,  205,  307.5, c3,    control 3
18,  56.5, 425,   c4,    control 4
19,  56.5, 646,   a4,    anchor 4
20,  56.5, 646,   a5,    anchor 5
21,  56.5, 881,   c5,    control 5
22,  205,  994,   c6,    control 6
23, 335.5, 994,   a6,    anchor 6
24, 335.5, 994,   a7,    anchor 7
25,  420,  994,   c7,    control 7
26,  506,  954,   c8,    control 8
27, 560.5, 870,   a8,    anchor 8`,
dlc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   d_lc XY+-100
 1,  605,    0,  TBUR,   typebox upper right
 2,  605, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  605,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  605,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  605,  321,  VHR,    cap-height (right)
10,   94,    0,  SPCL,   space left (Vorbreite)
11,  495,    0,  SPCR,   space right (Nachbreite)
12,  494,  594,   a1,    anchor 1
13,  454,  518,   c1,    control 1
14,  378,  480,   c2,    control 2
15,  310,  480,   a2,    anchor 2
16,  310,  480,   a3,    anchor 3
17,  211,  480,   c3,    control 3
18,   94,  565,   c4,    control 4
19,   94, 728.5,  a4,    anchor 4
20,   94, 728.5,  a5,    anchor 5
21,   94,  901,   c5,    control 5
22,  211,  984,   c6,    control 6
23,  310,  984,   a6,    anchor 6
24,  310,  984,   a7,    anchor 7
25,  380,  984,   c7,    control 7
26,  455,  946,   c8,    control 8
27,  495,  867,   a8,    anchor 8
28,  495, 270.5,  a9,    anchor 9
29,  495, 370.5,  c9,    control 9 Y+100
30,  495, 880.5,  c10,   control 10 Y-100
31,  495, 980.5,  a10,   anchor 10`,
duc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   d2_uc XY+-100
 1,  667,    0,  TBUR,   typebox upper right
 2,  667, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  667,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  667,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  667,  321,  VHR,    cap-height (right)
10, 106.5,   0,  SPCL,   space left (Vorbreite)
11, 584.5,   0,  SPCR,   space right (Nachbreite)
12, 106.5, 321,   a1,    anchor 1
13, 106.5, 421,   c1,    control 1 Y+100
14, 106.5, 882,   c2,    control 2 Y-100
15, 106.5, 982,   a2,    anchor 2
16, 106.5, 321,   a3,    anchor 3
17, 156.5, 321,   c3,    control 3 X+50
18,  246,  321,   c4,    control 4 X=246 (REVIEW TANGENCY FOR GLYPH-DATA)
19,  296,  321,   a4,    anchor 4
20,  296,  321,   a5,    anchor 5 ##BOGEN##
21,  427,  321,   c5,    control 5
22, 584.5, 441,   c6,    control 6
23, 584.5, 640.5, a6,    anchor 6
24, 584.5, 640.5, a7,    anchor 7
25, 584.5, 852,   c7,    control 7
26,  450,  982,   c8,    control 8
27,  296,  982,   a8,    anchor 8
28,  296,  982,   a9,    anchor 9
29,  246,  982,   c9,    control 9 X-50
30, 156.5, 982,   c10,   control 10 X+50
31, 106.5, 982,   a10,   anchor 10`,
elc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   e2_lc XY+-100
 1,  592,    0,  TBUR,   typebox upper right
 2,  592, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  592,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  592,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  592,  321,  VHR,    cap-height (right)
10, 99.5,    0,  SPCL,   space left (Vorbreite)
11,  504,    0,  SPCR,   space right (Nachbreite)
12,  100,  718,   a1,    anchor 1
13,  200,  718,   c1,    control 1 x+100
14,  404,  718,   c2,    control 2 x-100
15,  504,  718,   a2,    anchor 2 #TBD# continuous
16,  504,  718,   a3,    anchor 3 #TBD# continuous
17,  504,  590,   c3,    control 3
18,  443,  478,   c4,    control 4
19, 303.5, 478,   a4,    anchor 4
20, 303.5, 478,   a5,    anchor 5
21,  183,  478,   c5,    control 5
22, 99.5,  587,   c6,    control 6
23, 99.5, 736.5,  a6,    anchor 6
24, 99.5, 736.5,  a6,    anchor 7
25, 99.5,  856,   c7,    control 7
26,  173,  984,   c8,    control 8
27,  324,  984,   a8,    anchor 8
28,  324,  984,   a9,    anchor 9
29,  413,  984,   c9,    control 9
30,  463,  959,   c10,   control 10
31, 494.5, 941.5, a10,   anchor 10`,
euc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   e3_uc XY+-100
 1,  606,    0,  TBUR,   typebox upper right
 2,  606, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  606,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  606,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  606,  321,  VHR,    cap-height (right)
10,  124.5,  0,  SPCL,   space left (Vorbreite)
11,  514.5,  0,  SPCR,   space right (Nachbreite)
12, 124.5, 321,   a1,    anchor 1
13, 124.5, 421,   c1,    control 1
14, 124.5, 882,   c2,    control 2
15, 124.5, 982,   a2,    anchor 2
16,  125,  321,   a3,    anchor 3
17,  225,  321,   c3,    control 3
18, 404.5, 321,   c4,    control 4
19, 504.5, 321,   a4,    anchor 4
20,  125,  631,   a5,    anchor 5
21,  225,  631,   c5,    control 5
22,  381,  631,   c6,    control 6
23,  481,  631,   a6,    anchor 6
24,  125,  982,   a7,    anchor 7
25,  225,  982,   c7,    control 7
26, 414.5, 982,   c8,    control 8
27, 514.5, 982,   a8,    anchor 8`,
flc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   f3_lc(TEMP) 230723 EDIT 29AUG23
 1,  434,    0,  TBUR,   typebox upper right
 2,  434, 1480, TBLR,    typebox lower right
 3,    0, 1480, TBLL,    typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  434,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  434,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  434,  321,  VHR,    cap-height (right)
10,   87,    0,  SPCL,   space left (Vorbreite)
11,  366,    0,  SPCR,   space right (Nachbreite)
12,  366,  253.5, a1,    anchor 1
13,  346,  253.5, c1,    control 1 X-20
14,  337,  253.5, c2,    control 2 X+20
15,  317,  253.5, a2,    anchor 2
16,  317,  253.5, a3,    anchor 3
17, 249.5, 253.5, c3,    control 3
18, 197.5, 307,   c4,    control 4
19, 197.5, 373,   a4,    anchor 4
20, 197.5, 373,   a5,    anchor 5
21, 197.5, 473,   c5,    control 5 Y+100
22, 197.5, 885.5, c6,    control 6 Y-100
23, 197.5, 985.5, a6,    anchor 6
24,   87,  481,   a7,    anchor 7
25,  187,  481,   c7,    control 7 X+100
26,  258,  481,   c8,    control 8 X-100
27,  358,  481,   a8,    anchor 8`,
fuc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   f2_uc EDIT 29AUG23
 1,  566,    0,  TBUR,   typebox upper right
 2,  566, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  566,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  566,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  566,  321,  VHR,    cap-height (right)
10,  134,    0,  SPCL,   space left (Vorbreite)
11,  509.5,  0,  SPCR,   space right (Nachbreite)
12,  134,  321,   a1,    anchor 1
13,  134,  421,   c1,    control 1 Y+100
14,  134,  885.5, c2,    control 2 Y-100
15,  134,  985.5, a2,    anchor 2
16,  135,  321,   a3,    anchor 3
17,  235,  321,   c3,    control 3 X+100
18, 409.5, 321,   c4,    control 4 X-100
19, 509.5, 321,   a4,    anchor 4
20,  135,  631,   a5,    anchor 5
21,  235,  631,   c5,    control 5 X+100
22,  393,  631,   c6,    control 6 X-100
23,  493,  631,   a6,    anchor 6`,
glc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   g2_lc XY+-100
 1,  638,    0,  TBUR,   typebox upper right
 2,  638, 1480, TBLR,    typebox lower right
 3,    0, 1480, TBLL,    typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  638,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  638,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  638,  321,  VHR,    cap-height (right)
10,  109,    0,  SPCL,   space left (Vorbreite)
11,  509,    0,  SPCR,   space right (Nachbreite)
12,  507,  594,   a1,    anchor 1
13,  466,  519,   c1,    control 1
14,  389,  479,   c2,    control 2
15,  322,  479,   a2,    anchor 2
16,  322,  479,   a3,    anchor 3
17,  224,  479,   c3,    control 3
18,  112,  573,   c4,    control 4
19,  112,  722,   a4,    anchor 4
20,  112,  722,   a5,    anchor 5
21,  112,  888,   c5,    control 5
22,  223,  972,   c6,    control 6
23,  322,  972,   a6,    anchor 6
24,  322,  972,   a7,    anchor 7
25,  389,  972,   c7,    control 7
26,  467,  934,   c8,    control 8
27,  507,  855,   a8,    anchor 8
28,  509,  483,   a9,    anchor 9 
29,  509,  583,   c9,    control 9 Y+100
30,  509,  921,   c10,   control 10 Y-100
31,  509, 1021,   a10,   anchor 10
32,  509, 1021,   a11,   anchor 11
33,  509, 1125,   c11,   control 11
34,  420, 1211,   c12,   control 12
35,  315, 1211,   a12,   anchor 12
36,  315, 1211,   a13,   anchor 13
37,  243, 1211,   c13,   control 13
38,  179, 1172,   c14,   control 14
39,  145, 1115,   a14,   anchor 14`,
galt1lc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   g_lc##alt1## REV 03-SEP-23
 1,  620,    0,  TBUR,   typebox upper right
 2,  620, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  620,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  620,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  620,  321,  VHR,    cap-height (right)
10,  114,    0,  SPCL,   space left (Vorbreite)
11,  552,    0,  SPCR,   space right (Nachbreite)
12,  327,  476,   a1,    anchor 1 <top "o">
13,  273,  478,   c1,    control 1 X-5
14,  153,  517,   c2,    control 2
15,  153,  631,   a2,    anchor 2
16,  153,  631,   a3,    anchor 3
17,  153,  715,   c3,    control 3
18,  235,  781,   c4,    control 4
19,  335,  781,   a4,    anchor 4
20,  335,  781,   a5,    anchor 5
21,  435,  781,   c5,    control 5
22,  516,  715,   c6,    control 6
23,  516,  631,   a6,    anchor 6
24,  516,  631,   a7,    anchor 7
25,  516,  505,   c7,    control 7
26,  400,  479,   c8,    control 8 X+5
27,  362,  476,   a8,    anchor 8 ##TBD## X=326 NEAR CLOSE TOP "o"
28,  362,  476,   a9,    anchor 9 ##TBD## X=326 <schniepel>
29,  423,  476,   c9,    control 9 X+50
30,  513,  476,   c10,   control 10 X-50
31,  558,  476,   a10,   anchor 10
32,  292,  776,   a11,   anchor 11 ##TBD## CHANGE STEP <bottom "s">
33,  233,  772,   c11,   control 11
34,  152,  805,   c12,   control 12
35,  152,  861,   a12,   anchor 12
36,  152,  861,   a13,   anchor 13
37,  152,  934,   c13,   control 13
38,  247,  949,   c14,   control 14
39,  354,  951,   a14,   anchor 14
40,  354,  951,   a15,   anchor 15
41,  444,  953,   c15,   control 15
42,  553,  974,   c16,   control 16
43,  553, 1081,   a16,   anchor 16
44,  553, 1081,   a17,   anchor 17
45,  553, 1192,   c17,   control 17
46,  428, 1232,   c18,   control 18
47,  325, 1232,   a18,   anchor 18
48,  325, 1232,   a19,   anchor 19
49,  177, 1232,   c19,   control 19
50,  115, 1147,   c20,   control 20
51,  115, 1088,   a20,   anchor 20
52,  115, 1088,   a21,   anchor 21
53,  115, 1015,   c21,   control 21
54,  165,  962,   c22,   control 22
55,  236,  938,   a22,   anchor 22`,
galt2lc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   g_lc##alt2## 010923 REVISION
 1,  620,    0,  TBUR,   typebox upper right
 2,  620, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  620,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  620,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  620,  321,  VHR,    cap-height (right)
10,  116,    0,  SPCL,   space left (Vorbreite)
11,  566,    0,  SPCR,   space right (Nachbreite)
12,  226,  760,   a1,    anchor 1
13,  254,  773,   c1,    control 1
14,  291,  782,   c2,    control 2
15,  324,  782,   a2,    anchor 2
16,  324,  782,   a3,    anchor 3
17,  424,  782,   c3,    control 3
18,  504,  715,   c4,    control 4
19,  504,  631,   a4,    anchor 4
20,  504,  631,   a5,    anchor 5
21,  504,  547,   c5,    control 5
22,  424,  480,   c6,    control 6
23,  324,  480,   a6,    anchor 6
24,  324,  480,   a7,    anchor 7
25,  223,  480,   c7,    control 7
26,  142,  547,   c8,    control 8
27,  142,  631,   a8,    anchor 8
28,  142,  631,   a9,    anchor 9
29,  142,  680,   c9,    control 9
30,  170,  723,   c10,   control 10  ***
31,  210, 751.5,  a10,   anchor 10  xxx
32,  210, 751.5,  a11,   anchor 11  xxx
33,  169,  770,   c11,   control 11  ***
34,  142,  805,   c12,   control 12
35,  142,  845,   a12,   anchor 12 --- weird
36,  142,  845,   a13,   anchor 13 ---
37,  142,  897,   c13,   control 13
38,  177,  946,   c14,   control 14
39,  263,  946,   a14,   anchor 14 xx
40,  263,  946,   a15,   anchor 15 xx
41,  383,  946,   c15,   control 15
42,  554,  937,   c16,   control 16
43,  554, 1083,   a16,   anchor 16
44,  554, 1083,   a17,   anchor 17
45,  554, 1193,   c17,   control 17
46,  430, 1234,   c18,   control 18
47,  326, 1234,   a18,   anchor 18
48,  326, 1234,   a19,   anchor 19
49,  200, 1234,   c19,   control 19
50,  116, 1193,   c20,   control 20
51,  116, 1090,   a20,   anchor 20
52,  116, 1090,   a21,   anchor 21
53,  116, 1027,   c21,   control 21
54,  161,  976,   c22,   control 22  ***
55,  219,  953,   a22,   anchor 22
56,  464,  480,   a23,   anchor 23 <schniepel>
57,  498,  480,   c23,   control 23 X+20
58,  532,  480,   c24,   control 24 X-20
59,  566,  480,   a24,   anchor 24`,
galt3lc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   g_lc##alt3## 010923 REVISION
 1,  620,    0,  TBUR,   typebox upper right
 2,  620, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  620,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  620,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  620,  321,  VHR,    cap-height (right)
10,   97,    0,  SPCL,   space left (Vorbreite)
11,  565,    0,  SPCR,   space right (Nachbreite)
12,  170,  722,   a1,    anchor 1
13,  141,  694,   c1,    control 1
14,  123,  664,   c2,    control 2
15,  123,  620,   a2,    anchor 2
16,  123,  620,   a3,    anchor 3
17,  123,  532,   c3,    control 3
18,  204,  480,   c4,    control 4
19,  304,  480,   a4,    anchor 4
20,  304,  480,   a5,    anchor 5
21,  403,  480,   c5,    control 5
22,  485,  532,   c6,    control 6
23,  485,  621,   a6,    anchor 6
24,  485,  621,   a7,    anchor 7
25,  485,  755,   c7,    control 7
26,  321,  754,   c8,    control 8
27,  235,  754,   a8,    anchor 8
28,  235,  754,   a9,    anchor 9
29,  150,  754,   c9,    control 9
30,  118,  813,   c10,   control 10
31,  121,  854,   a10,   anchor 10
32,  121,  854,   a11,   anchor 11
33,  124,  894,   c11,   control 11
34,  160,  949,   c12,   control 12
35,  265,  949,   a12,   anchor 12
36,  265,  949,   a13,   anchor 13
37,  368,  949,   c13,   control 13
38,  535,  932,   c14,   control 14
39,  535, 1082,   a14,   anchor 14
40,  535, 1082,   a15,   anchor 15
41,  535, 1192,   c15,   control 15
42,  410, 1234,   c16,   control 16
43,  307, 1234,   a16,   anchor 16
44,  307, 1234,   a17,   anchor 17
45,  159, 1234,   c17,   control 17
46,   97, 1178,   c18,   control 18
47,   97, 1089,   a18,   anchor 18
48,   97, 1089,   a19,   anchor 19
49,   97, 1022,   c19,   control 19
50,  145,  984,   c20,   control 20
51,  175,  968,   a20,   anchor 20
60,  485,  481,   a25,   anchor 25 <Schniepel>
61,  505,  481,   c25,   control 25 X+20
62,  545,  481,   c26,   control 26 X-20
63,  565,  481,   a26,   anchor 26`,

guc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   g_uc 25-SEP-23
 1,  714,    0,  TBUR,   typebox upper right
 2,  714, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  714,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  714,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  714,  321,  VHR,    cap-height (right)
10,   74,    0,  SPCL,   space left (Vorbreite)
11,  595,    0,  SPCR,   space right (Nachbreite)
12,  583,  416,   a1,    anchor 1
13,  525,  345,   c1,    control 1
14,  443,  308,   c2,    control 2
15,  365,  308,   a2,    anchor 2
16,  365,  308,   a3,    anchor 3
17,  227,  308,   c3,    control 3
18,   74,  425,   c4,    control 4
19,   74,  646,   a4,    anchor 4
20,   74,  646,   a5,    anchor 5
21,   74,  882,   c5,    control 5
22,  226,  994,   c6,    control 6
23,  365,  994,   a6,    anchor 6
24,  365,  994,   a7,    anchor 7
25,  448,  994,   c7,    control 7
26,  538,  953,   c8,    control 8
27,  595,  870,   a8,    anchor 8
28,  595,  870,   a9,    anchor 9
29,  595,  804,   c9,    control 9
30,  595,  717,   c10,   control 10
31,  595,  651,   a10,   anchor 10
32,  595,  651,   a11,   anchor 11
33,  529,  651,   c11,   control 11
34,  431,  651,   c12,   control 12
35,  366,  651,   a12,   anchor 12`,
galtuc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   galt_uc 25-SEP-23
 1,  714,    0,  TBUR,   typebox upper right
 2,  714, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  714,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  714,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  714,  321,  VHR,    cap-height (right)
10,   74,    0,  SPCL,   space left (Vorbreite)
11,  602,    0,  SPCR,   space right (Nachbreite)
12,  583,  416,   a1,    anchor 1
13,  525,  345,   c1,    control 1
14,  443,  308,   c2,    control 2
15,  365,  308,   a2,    anchor 2
16,  365,  308,   a3,    anchor 3
17,  227,  308,   c3,    control 3
18,   74,  425,   c4,    control 4
19,   74,  646,   a4,    anchor 4
20,   74,  646,   a5,    anchor 5
21,   74,  882,   c5,    control 5
22,  226,  994,   c6,    control 6
23,  365,  994,   a6,    anchor 6
24,  365,  994,   a7,    anchor 7
25,  453,  994,   c7,    control 7
26,  545,  949,   c8,    control 8
27,  602,  856,   a8,    anchor 8
28,  441,  669,   a9,    anchor 9
29,  490,  669,   c9,    control 9
30,  554,  669,   c10,   control 10
31,  602,  669,   a10,   anchor 10
32,  602,  669,   a11,   anchor 11
33,  602,  769,   c11,   control 11
34,  602,  884,   c12,   control 12
35,  602,  982,   a12,   anchor 12`,
olc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   o_lc (080823)
 1,  605,    0,  TBUR,   typebox upper right
 2,  605, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  605,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  605,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  605,  321,  VHR,    cap-height (right)
10,   90.5,  0,  SPCL,   space left (Vorbreite)
11,  523.5,  0,  SPCR,   space right (Nachbreite)
12, 306.5, 480,   a1,    anchor 1
13,  208,  480,   c1,    control 1
14,  90.5, 565,   c2,    control 2
15,  90.5, 728.5, a2,    anchor 2
16,  90.5, 728.5, a3,    anchor 3
17,  90.5, 901,   c3,    control 3
18,  208,  984,   c4,    control 4
19, 306.5, 984,   a4,    anchor 4
20, 306.5, 984,   a5,    anchor 5
21,  408,  984,   c5,    control 5
22, 523.5, 901,   c6,    control 6
23, 523.5, 728.5, a6,    anchor 6
24, 523.5, 728.5, a7,    anchor 7
25, 523.5, 565,   c7,    control 7
26,  408,  480,   c8,    control 8
27, 306.5, 480,   a8,    anchor 8`,
ouc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   o_uc (100823)
 1,  732,    0,  TBUR,   typebox upper right
 2,  732, 1480,  TBLR,   typebox lower right
 3,    0,  1480, TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  732,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  732,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  732,  321,  VHR,    cap-height (right)
10,   61,    0,  SPCL,   space left (Vorbreite)
11,  643,    0,  SPCR,   space right (Nachbreite)
12,  352,  307.5, a1,    anchor 1
13,  213,  307.5, c1,    control 1
14,   61,  425,   c2,    control 2
15,   61,  646,   a2,    anchor 2
16,   61,  646,   a3,    anchor 3
17,   61,  881,   c3,    control 3
18,  213,  994,   c4,    control 4
19,  352,  994,   a4,    anchor 4
20,  352,  994,   a5,    anchor 5
21,  491,  994,   c5,    control 5
22,  643,  881,   c6,    control 6
23,  643,  646,   a6,    anchor 6
24,  643,  646,   a7,    anchor 7
25,  643,  425,   c7,    control 7
26,  491,  307.5, c8,    control 8
27,  352,  307.5, a8,    anchor 8`,
slc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   s_lc REV 030923
 1,  504,    0,  TBUR,   typebox upper right
 2,  504, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  504,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  504,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  504,  321,  VHR,    cap-height (right)
10,   94,    0,  SPCL,   space left (Vorbreite)
11,  408,    0,  SPCR,   space right (Nachbreite)
12,  385,  523,   a1,    anchor 1
13,  348,  490,   c1,    control 1
14,  299,  477,   c2,    control 2
15,  258,  477,   a2,    anchor 2
16,  258,  477,   a3,    anchor 3
17,  155,  477,   c3,    control 3
18,  105,  546,   c4,    control 4
19,  105,  601,   a4,    anchor 4
20,  105,  601,   a5,    anchor 5
21,  105,  671,   c5,    control 5
22,  164,  704,   c6,    control 6 #o--#
23,  254,  725,   a6,    anchor 6 #--x--#
24,  254,  725,   a7,    anchor 7 #--x--#
25,  347,  747,   c7,    control 7 #--o# y-0.5
26,  408,  786,   c8,    control 8
27,  408,  861,   a8,    anchor 8
28,  408,  861,   a9,    anchor 9
29,  408,  920,   c9,    control 9
30,  355,  988,   c10,   control 10
31,  249,  988,   a10,   anchor 10
32,  249,  988,   a11,   anchor 11
33,  187,  988,   c11,   control 11
34,  131,  967,   c12,   control 12
35,   94,  929,   a12,   anchor 12`,
suc:
`id,    x,    y,  pt,     comment
 0,    0,    0,  TBUL,   s_uc REV 030923
 1,  583,    0,  TBUR,   typebox upper right
 2,  583, 1480,  TBLR,   typebox lower right
 3,    0, 1480,  TBLL,   typebox lower left
 4,    0,  982,  BLL,    baseline (left)
 5,  583,  982,  BLR,    baseline (right)
 6,    0,  481,  XHL,    x-height (left)
 7,  583,  481,  XHR,    x-height (right)
 8,    0,  321,  VHL,    cap-height (left)
 9,  583,  321,  VHR,    cap-height (right)
10,   69,    0,  SPCL,   min left (Vorbreite)
11,  490,    0,  SPCR,   max right (Nachbreite)
12,  467,  378,   a1,    anchor 1
13,  423,  336,   c1,    control 1
14,  360,  309,   c2,    control 2
15,  288,  309,   a2,    anchor 2
16,  288,  309,   a3,    anchor 3
17,  150,  309,   c3,    control 3
18,   83,  402,   c4,    control 4
19,   83,  474,   a4,    anchor 4
20,   83,  474,   a5,    anchor 5
21,   83,  575,   c5,    control 5
22,  176,  617,   c6,    control 6 #o--#
23, 282.5, 640.5, a6,    anchor 6 #--x--# y-0.5
24, 282.5, 640.5, a7,    anchor 7 #--x--# y-0.5
25,  406,  670,   c7,    control 7 #--o# y-1.0
26,  490,  723,   c8,    control 8
27,  490,  823,   a8,    anchor 8
28,  490,  823,   a9,    anchor 9
29,  490,  911,   c9,    control 9
30,  410,  994,   c10,   control 10
31,  276,  994,   a10,   anchor 10
32,  276,  994,   a11,   anchor 11
33,  193,  994,   c11,   control 11
34,  117,  967,   c12,   control 12
35,   69,  915,   a12,   anchor 12`
} // INVENTORY



