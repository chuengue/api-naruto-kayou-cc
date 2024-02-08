import { Knex } from 'knex';

import { ETableNames } from '../ETableNames';

const cards = [
    {
        code: 'R-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-001.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-002.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-003.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-004.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-005.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-006.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-007.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-008.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-009.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-010.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-011.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-012.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-013.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-014.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-015.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-016.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-017.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-018.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-019.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-020.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-021.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-022.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-023.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-024.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-025.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-026.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-027.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-028.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-029.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-030.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-031.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-032.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-033.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-034.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-035.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-036.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-037.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-038.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-039.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-040.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-041.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-042.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-043.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-044.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-045.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-046.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-047.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-048.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-049.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-050.jpg',
        rarity: 'R',
        box: 'W1-T1'
    },
    {
        code: 'R-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-051.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-052.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-053.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-054.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-055.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-056.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-057.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-058.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-059.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-060.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-061.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-062.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-063',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-063.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-064',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-064.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-065',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-065.jpg',
        rarity: 'R',
        box: 'W2-T1'
    },
    {
        code: 'R-066',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-066.jpg',
        rarity: 'R',
        box: 'W2-T2'
    },
    {
        code: 'R-067',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-067.jpg',
        rarity: 'R',
        box: 'W2-T2'
    },
    {
        code: 'R-068',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-068.jpg',
        rarity: 'R',
        box: 'W2-T2'
    },
    {
        code: 'R-069',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-069.jpg',
        rarity: 'R',
        box: 'W2-T2'
    },
    {
        code: 'R-070',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-070.jpg',
        rarity: 'R',
        box: 'W2-T2'
    },
    {
        code: 'R-071',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-071.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-072',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-072.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-073',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-073.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-074',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-074.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-075',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-075.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-076',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-076.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-077',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-077.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-078',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-078.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-079',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-079.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-080',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-080.jpg',
        rarity: 'R',
        box: 'W3-T2'
    },
    {
        code: 'R-081',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-081.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-082',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-082.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-083',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-083.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-084',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-084.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-085',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-085.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-086',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-086.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-087',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-087.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-088',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-088.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-089',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-089.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-090',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-090.jpg',
        rarity: 'R',
        box: 'W4-T2'
    },
    {
        code: 'R-091',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-091.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-092',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-092.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-093',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-093.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-094',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-094.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-095',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-095.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-096',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-096.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-097',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-097.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-098',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-098.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-099',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-099.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-100',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-100.jpg',
        rarity: 'R',
        box: 'W5-T2'
    },
    {
        code: 'R-101',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-101.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'R-102',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-102.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'R-103',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-103.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'R-104',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-104.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'R-105',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-105.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'R-106',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-106.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'R-107',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-107.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'R-108',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-108.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'R-109',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-109.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'R-110',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/R-110.jpg',
        rarity: 'R',
        box: 'W6-T2'
    },
    {
        code: 'CC-R-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-001.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-002.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-003.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-004.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-005.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-006.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-007.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-008.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-009.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-010.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-011.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-012.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-013.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-014.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-015.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-016.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-017.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-018.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-019.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-020.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-021.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-022.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-023.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-024.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-025.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-026.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-027.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-028.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-029.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-030.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-031.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-032.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-033.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-034.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-035.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-036.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-037.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-038.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-039.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-040.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-041.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-042.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'CC-R-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-R-043.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-R-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-R-001.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-R-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-R-002.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-R-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-R-003.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-R-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-R-004.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-R-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-R-005.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-R-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-R-006.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-R-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-R-007.jpg',
        rarity: 'CC-R',
        box: 'NinjaAge'
    },
    {
        code: 'SR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-001.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-002.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-003.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-004.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-005.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-006.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-007.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-008.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-009.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-010.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-011.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-012.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-013.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-014.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-015.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-016.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-017.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-018.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-019.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-020.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-021.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-022.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-023.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-024.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-025.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-026.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-027.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-028.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-029.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-030.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-031.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-032.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-033.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-034.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-035.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-036.jpg',
        rarity: 'SR',
        box: 'W1-T1'
    },
    {
        code: 'SR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-037.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-038.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-039.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-040.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-041.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-042.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-043.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-044.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-045.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-046.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-047.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-048.jpg',
        rarity: 'SR',
        box: 'CloudBox'
    },
    {
        code: 'SR-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-049.jpg',
        rarity: 'SR',
        box: 'W2-T3'
    },
    {
        code: 'SR-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-050.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-051.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-052.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-053.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-054.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-055.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-056.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-057.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-058.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-059.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-060.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-061.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-062.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-063',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-063.jpg',
        rarity: 'SR',
        box: 'W2-T1'
    },
    {
        code: 'SR-064',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-064.jpg',
        rarity: 'SR',
        box: 'W2-T2'
    },
    {
        code: 'SR-065',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-065.jpg',
        rarity: 'SR',
        box: 'W2-T2'
    },
    {
        code: 'SR-066',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-066.jpg',
        rarity: 'SR',
        box: 'W2-T2'
    },
    {
        code: 'SR-067',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-067.jpg',
        rarity: 'SR',
        box: 'W2-T2'
    },
    {
        code: 'SR-068',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-068.jpg',
        rarity: 'SR',
        box: 'W2-T2'
    },
    {
        code: 'SR-069',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-069.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-070',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-070.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-071',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-071.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-072',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-072.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-073',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-073.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-074',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-074.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-075',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-075.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-076',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-076.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-077',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-077.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-078',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-078.jpg',
        rarity: 'SR',
        box: 'W3-T2'
    },
    {
        code: 'SR-079',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-079.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-080',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-080.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-081',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-081.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-082',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-082.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-083',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-083.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-084',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-084.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-085',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-085.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-086',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-086.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-087',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-087.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-088',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-088.jpg',
        rarity: 'SR',
        box: 'W4-T2'
    },
    {
        code: 'SR-089',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-089.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-090',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-090.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-091',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-091.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-092',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-092.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-093',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-093.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-094',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-094.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-095',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-095.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-096',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-096.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-097',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-097.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-098',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-098.jpg',
        rarity: 'SR',
        box: 'W5-T2'
    },
    {
        code: 'SR-099',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-099.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'SR-100',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-100.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'SR-101',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-101.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'SR-102',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-102.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'SR-103',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-103.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'SR-104',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-104.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'SR-105',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-105.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'SR-106',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-106.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'SR-107',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-107.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'SR-108',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SR-108.jpg',
        rarity: 'SR',
        box: 'W6-T2'
    },
    {
        code: 'CC-SR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-001.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-002.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-003.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-004.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-005.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-006.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-007.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-008.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-009.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-010.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-011.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-012.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-013.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-014.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-015.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-016.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-017.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-018.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-019.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-020.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-021.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-022.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-023.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SR-024.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SR-001.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SR-002.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SR-003.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SR-004.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SR-005.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SR-006.jpg',
        rarity: 'CC-SR',
        box: 'NinjaAge'
    },
    {
        code: 'SSR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-001.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-002.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-003.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-004.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-005.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-006.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-007.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-008.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-009.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-010.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-011.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-012.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-013.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-014.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-015.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-016.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-017.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-018.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-019.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-020.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-021.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-022.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-023.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-024.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-025.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-026.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-027.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-028.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-029.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-030.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-031.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-032.jpg',
        rarity: 'SSR',
        box: 'W1-T1'
    },
    {
        code: 'SSR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-033.jpg',
        rarity: 'SSR',
        box: 'W1-T4'
    },
    {
        code: 'SSR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-034.jpg',
        rarity: 'SSR',
        box: 'W1-T4'
    },
    {
        code: 'SSR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-035.jpg',
        rarity: 'SSR',
        box: 'W1-T4'
    },
    {
        code: 'SSR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-036.jpg',
        rarity: 'SSR',
        box: 'W1-T4'
    },
    {
        code: 'SSR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-037.jpg',
        rarity: 'SSR',
        box: 'W1-T4'
    },
    {
        code: 'SSR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-038.jpg',
        rarity: 'SSR',
        box: 'W1-T4'
    },
    {
        code: 'SSR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-039.jpg',
        rarity: 'SSR',
        box: 'W1-T4'
    },
    {
        code: 'SSR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-040.jpg',
        rarity: 'SSR',
        box: 'W1-T4'
    },
    {
        code: 'SSR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-041.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-042.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-043.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-044.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-045.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-046.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-047.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-048.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-049.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-050.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-051.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-052.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-053.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-054.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-055.jpg',
        rarity: 'SSR',
        box: 'W2-T1'
    },
    {
        code: 'SSR-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-056.jpg',
        rarity: 'SSR',
        box: 'W2-T2'
    },
    {
        code: 'SSR-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-057.jpg',
        rarity: 'SSR',
        box: 'W2-T2'
    },
    {
        code: 'SSR-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-058.jpg',
        rarity: 'SSR',
        box: 'W2-T2'
    },
    {
        code: 'SSR-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-059.jpg',
        rarity: 'SSR',
        box: 'W2-T2'
    },
    {
        code: 'SSR-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-060.jpg',
        rarity: 'SSR',
        box: 'W2-T2'
    },
    {
        code: 'SSR-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-061.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-062.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-063',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-063.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-064',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-064.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-065',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-065.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-066',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-066.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-067',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-067.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-068',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-068.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-069',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-069.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-070',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-070.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-071',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-071.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-072',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-072.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-073',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-073.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-074',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-074.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-075',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-075.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-076',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-076.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-077',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-077.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-078',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-078.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-079',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-079.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-080',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-080.jpg',
        rarity: 'SSR',
        box: 'W3-T2'
    },
    {
        code: 'SSR-081',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-081.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-082',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-082.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-083',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-083.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-084',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-084.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-085',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-085.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-086',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-086.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-087',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-087.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-088',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-088.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-089',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-089.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-090',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-090.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-091',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-091.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-092',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-092.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-093',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-093.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-094',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-094.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-095',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-095.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-096',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-096.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-097',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-097.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-098',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-098.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-099',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-099.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-100',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-100.jpg',
        rarity: 'SSR',
        box: 'W4-T2'
    },
    {
        code: 'SSR-101',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-101.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-102',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-102.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-103',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-103.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-104',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-104.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-105',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-105.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-106',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-106.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-107',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-107.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-108',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-108.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-109',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-109.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-110',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-110.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-111',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-111.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-112',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-112.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-113',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-113.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-114',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-114.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-115',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-115.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-116',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-116.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-117',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-117.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-118',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-118.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-119',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-119.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-120',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-120.jpg',
        rarity: 'SSR',
        box: 'W5-T2'
    },
    {
        code: 'SSR-121',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-121.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SSR-122',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-122.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SSR-123',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-123.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SSR-124',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-124.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SSR-125',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-125.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SSR-126',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-126.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SSR-127',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-127.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SSR-128',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-128.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SSR-129',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-129.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SSR-130',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SSR-130.jpg',
        rarity: 'SSR',
        box: 'W6-T2'
    },
    {
        code: 'SS-SSR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-001.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SSR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-002.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SSR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-003.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SSR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-004.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SSR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-005.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SSR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-006.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SSR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-007.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SSR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-008.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SSR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-009.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SSR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SSR-010.jpg',
        rarity: 'SS-SSR',
        box: 'Heaven&Earth'
    },
    {
        code: 'CC-SSR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-001.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-002.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-003.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-004.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-005.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-006.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-007.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-008.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-009.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-010.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-011.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-012.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-013.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-014.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-015.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-016.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-017.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-018.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-019.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SSR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SSR-020.jpg',
        rarity: 'CC-SSR',
        box: 'NinjaAge'
    },
    {
        code: 'UR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-001.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-002.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-003.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-004.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-005.jpg',
        rarity: 'UR',
        box: 'W1-T1'
    },
    {
        code: 'UR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-006.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-007.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-008.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-009.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-010.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-011.jpg',
        rarity: 'UR',
        box: 'W1-T2'
    },
    {
        code: 'UR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-012.jpg',
        rarity: 'UR',
        box: 'W1-T1'
    },
    {
        code: 'UR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-013.jpg',
        rarity: 'UR',
        box: 'W1-T1'
    },
    {
        code: 'UR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-014.jpg',
        rarity: 'UR',
        box: 'W1-T1'
    },
    {
        code: 'UR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-015.jpg',
        rarity: 'UR',
        box: 'W1-T1'
    },
    {
        code: 'UR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-016.jpg',
        rarity: 'UR',
        box: 'W1-T1'
    },
    {
        code: 'UR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-017.jpg',
        rarity: 'UR',
        box: 'W1-T1'
    },
    {
        code: 'UR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-018.jpg',
        rarity: 'UR',
        box: 'W1-T1'
    },
    {
        code: 'UR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-019.jpg',
        rarity: 'UR',
        box: '?'
    },
    {
        code: 'UR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-020.jpg',
        rarity: 'UR',
        box: '?'
    },
    {
        code: 'UR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-021.jpg',
        rarity: 'UR',
        box: 'W1-T4'
    },
    {
        code: 'UR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-022.jpg',
        rarity: 'UR',
        box: 'W1-T4'
    },
    {
        code: 'UR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-023.jpg',
        rarity: 'UR',
        box: 'W1-T4'
    },
    {
        code: 'UR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-024.jpg',
        rarity: 'UR',
        box: 'W1-T4'
    },
    {
        code: 'UR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-025.jpg',
        rarity: 'UR',
        box: 'W2-T1'
    },
    {
        code: 'UR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-026.jpg',
        rarity: 'UR',
        box: 'W2-T1'
    },
    {
        code: 'UR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-027.jpg',
        rarity: 'UR',
        box: 'W2-T1'
    },
    {
        code: 'UR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-028.jpg',
        rarity: 'UR',
        box: 'W2-T1'
    },
    {
        code: 'UR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-029.jpg',
        rarity: 'UR',
        box: 'W2-T1'
    },
    {
        code: 'UR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-030.jpg',
        rarity: 'UR',
        box: 'W2-T1'
    },
    {
        code: 'UR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-031.jpg',
        rarity: 'UR',
        box: 'W2-T1'
    },
    {
        code: 'UR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-032.jpg',
        rarity: 'UR',
        box: 'W2-T1'
    },
    {
        code: 'UR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-033.jpg',
        rarity: 'UR',
        box: 'W2-T2'
    },
    {
        code: 'UR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-034.jpg',
        rarity: 'UR',
        box: 'W2-T2'
    },
    {
        code: 'UR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-035.jpg',
        rarity: 'UR',
        box: 'W2-T2'
    },
    {
        code: 'UR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-036.jpg',
        rarity: 'UR',
        box: 'W2-T2'
    },
    {
        code: 'UR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-037.jpg',
        rarity: 'UR',
        box: 'W2-T3'
    },
    {
        code: 'UR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-038.jpg',
        rarity: 'UR',
        box: 'W2-T3'
    },
    {
        code: 'UR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-039.jpg',
        rarity: 'UR',
        box: 'W2-T3'
    },
    {
        code: 'UR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-040.jpg',
        rarity: 'UR',
        box: 'W2-T3'
    },
    {
        code: 'UR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-041.jpg',
        rarity: 'UR',
        box: 'W2-T4'
    },
    {
        code: 'UR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-042.jpg',
        rarity: 'UR',
        box: 'W2-T4'
    },
    {
        code: 'UR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-043.jpg',
        rarity: 'UR',
        box: 'W2-T4'
    },
    {
        code: 'UR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-044.jpg',
        rarity: 'UR',
        box: 'W2-T4'
    },
    {
        code: 'UR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-045.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-046.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-047.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-048.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-049.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-050.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-051.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-052.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-053.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-054.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-055.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-056.jpg',
        rarity: 'UR',
        box: 'W3-T2'
    },
    {
        code: 'UR-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-057.jpg',
        rarity: 'UR',
        box: 'W3-T3'
    },
    {
        code: 'UR-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-058.jpg',
        rarity: 'UR',
        box: 'W3-T3'
    },
    {
        code: 'UR-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-059.jpg',
        rarity: 'UR',
        box: 'W3-T3'
    },
    {
        code: 'UR-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-060.jpg',
        rarity: 'UR',
        box: 'W3-T3'
    },
    {
        code: 'UR-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-061.jpg',
        rarity: 'UR',
        box: 'W3-T4'
    },
    {
        code: 'UR-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-062.jpg',
        rarity: 'UR',
        box: 'W3-T4'
    },
    {
        code: 'UR-063',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-063.jpg',
        rarity: 'UR',
        box: 'W3-T4'
    },
    {
        code: 'UR-064',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-064.jpg',
        rarity: 'UR',
        box: 'W3-T4'
    },
    {
        code: 'UR-065',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-065.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-066',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-066.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-067',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-067.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-068',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-068.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-069',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-069.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-070',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-070.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-071',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-071.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-072',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-072.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-073',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-073.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-074',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-074.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-075',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-075.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-076',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-076.jpg',
        rarity: 'UR',
        box: 'W4-T2'
    },
    {
        code: 'UR-077',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-077.jpg',
        rarity: 'UR',
        box: 'W4-T3'
    },
    {
        code: 'UR-078',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-078.jpg',
        rarity: 'UR',
        box: 'W4-T3'
    },
    {
        code: 'UR-079',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-079.jpg',
        rarity: 'UR',
        box: 'W4-T3'
    },
    {
        code: 'UR-080',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-080.jpg',
        rarity: 'UR',
        box: 'W4-T3'
    },
    {
        code: 'UR-081',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-081.jpg',
        rarity: 'UR',
        box: 'W4-T4'
    },
    {
        code: 'UR-082',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-082.jpg',
        rarity: 'UR',
        box: 'W4-T4'
    },
    {
        code: 'UR-083',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-083.jpg',
        rarity: 'UR',
        box: 'W4-T4'
    },
    {
        code: 'UR-084',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-084.jpg',
        rarity: 'UR',
        box: 'W4-T4'
    },
    {
        code: 'UR-085',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-085.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-086',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-086.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-087',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-087.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-088',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-088.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-089',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-089.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-090',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-090.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-091',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-091.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-092',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-092.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-093',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-093.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-094',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-094.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-095',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-095.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-096',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-096.jpg',
        rarity: 'UR',
        box: 'W5-T2'
    },
    {
        code: 'UR-097',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-097.jpg',
        rarity: 'UR',
        box: 'W5-T3'
    },
    {
        code: 'UR-098',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-098.jpg',
        rarity: 'UR',
        box: 'W5-T3'
    },
    {
        code: 'UR-099',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-099.jpg',
        rarity: 'UR',
        box: 'W5-T3'
    },
    {
        code: 'UR-100',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-100.jpg',
        rarity: 'UR',
        box: 'W5-T3'
    },
    {
        code: 'UR-101',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-101.jpg',
        rarity: 'UR',
        box: 'W5-T4'
    },
    {
        code: 'UR-102',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-102.jpg',
        rarity: 'UR',
        box: 'W5-T4'
    },
    {
        code: 'UR-103',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-103.jpg',
        rarity: 'UR',
        box: 'W5-T4'
    },
    {
        code: 'UR-104',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-104.jpg',
        rarity: 'UR',
        box: 'W5-T4'
    },
    {
        code: 'UR-105',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-105.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'UR-106',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-106.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'UR-107',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-107.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'UR-108',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-108.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'UR-109',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-109.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'UR-110',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-110.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'UR-111',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-111.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'UR-112',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-112.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'UR-113',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-113.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'UR-114',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/UR-114.jpg',
        rarity: 'UR',
        box: 'W6-T2'
    },
    {
        code: 'SS-UR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-UR-001.jpg',
        rarity: 'SS-UR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-UR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-UR-002.jpg',
        rarity: 'SS-UR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-UR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-UR-003.jpg',
        rarity: 'SS-UR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-UR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-UR-004.jpg',
        rarity: 'SS-UR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-UR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-UR-005.jpg',
        rarity: 'SS-UR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-UR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-UR-006.jpg',
        rarity: 'SS-UR',
        box: 'NewYears'
    },
    {
        code: 'SS-UR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-UR-007.jpg',
        rarity: 'SS-UR',
        box: 'NewYears'
    },
    {
        code: 'SS-UR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-UR-008.jpg',
        rarity: 'SS-UR',
        box: 'NewYears'
    },
    {
        code: 'SS-UR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-UR-009.jpg',
        rarity: 'SS-UR',
        box: 'NewYears'
    },
    {
        code: 'CC-UR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-001.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-002.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-003.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-004.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-005.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-006.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-007.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-008.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-009.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-010.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-011.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-012.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-013.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-014.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-015.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-016.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-017.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-018.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-019.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-020.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-021.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-UR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-UR-022.jpg',
        rarity: 'CC-UR',
        box: 'NinjaAge'
    },
    {
        code: 'SP-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-001.jpg',
        rarity: 'SP',
        box: 'W1-T3'
    },
    {
        code: 'SP-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-002.jpg',
        rarity: 'SP',
        box: 'W1-T1'
    },
    {
        code: 'SP-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-003.jpg',
        rarity: 'SP',
        box: 'W1-T2'
    },
    {
        code: 'SP-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-004.jpg',
        rarity: 'SP',
        box: 'W1-T3'
    },
    {
        code: 'SP-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-005.jpg',
        rarity: 'SP',
        box: 'W1-T4'
    },
    {
        code: 'SP-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-006.jpg',
        rarity: 'SP',
        box: 'W1-T4'
    },
    {
        code: 'SP-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-007.jpg',
        rarity: 'SP',
        box: 'W1-T4'
    },
    {
        code: 'SP-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-008.jpg',
        rarity: 'SP',
        box: 'W1-T4'
    },
    {
        code: 'SP-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-009.jpg',
        rarity: 'SP',
        box: 'EXPack1'
    },
    {
        code: 'SP-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-010.jpg',
        rarity: 'SP',
        box: 'CloudBox'
    },
    {
        code: 'SP-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-011.jpg',
        rarity: 'SP',
        box: 'CloudBox'
    },
    {
        code: 'SP-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-012.jpg',
        rarity: 'SP',
        box: 'W2-T1'
    },
    {
        code: 'SP-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-013.jpg',
        rarity: 'SP',
        box: 'W2-T2'
    },
    {
        code: 'SP-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-016.jpg',
        rarity: 'SP',
        box: 'W2-T4'
    },
    {
        code: 'SP-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-017.jpg',
        rarity: 'SP',
        box: 'W2-T3'
    },
    {
        code: 'SP-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-018.jpg',
        rarity: 'SP',
        box: 'W2-T3'
    },
    {
        code: 'SP-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-019.jpg',
        rarity: 'SP',
        box: 'W2-T3'
    },
    {
        code: 'SP-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-020.jpg',
        rarity: 'SP',
        box: 'W2-T4'
    },
    {
        code: 'SP-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-021.jpg',
        rarity: 'SP',
        box: 'W2-T4'
    },
    {
        code: 'SP-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-022.jpg',
        rarity: 'SP',
        box: 'EXPack2'
    },
    {
        code: 'SP-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-023.jpg',
        rarity: 'SP',
        box: 'W3-T2'
    },
    {
        code: 'SP-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-024.jpg',
        rarity: 'SP',
        box: 'W3-T2'
    },
    {
        code: 'SP-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-025.jpg',
        rarity: 'SP',
        box: 'W3-T1'
    },
    {
        code: 'SP-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-026.jpg',
        rarity: 'SP',
        box: 'W3-T1'
    },
    {
        code: 'SP-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-027.jpg',
        rarity: 'SP',
        box: 'W3-T3'
    },
    {
        code: 'SP-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-028.jpg',
        rarity: 'SP',
        box: 'W3-T3'
    },
    {
        code: 'SP-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-029.jpg',
        rarity: 'SP',
        box: 'W3-T3'
    },
    {
        code: 'SP-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-030.jpg',
        rarity: 'SP',
        box: 'W3-T4'
    },
    {
        code: 'SP-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-031.jpg',
        rarity: 'SP',
        box: 'W3-T4'
    },
    {
        code: 'SP-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-032.jpg',
        rarity: 'SP',
        box: 'W3-T4'
    },
    {
        code: 'SP-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-033.jpg',
        rarity: 'SP',
        box: 'EXPack3'
    },
    {
        code: 'SP-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-034.jpg',
        rarity: 'SP',
        box: 'YouthScroll'
    },
    {
        code: 'SP-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-035.jpg',
        rarity: 'SP',
        box: 'YouthScroll'
    },
    {
        code: 'SP-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-036.jpg',
        rarity: 'SP',
        box: 'YouthScroll'
    },
    {
        code: 'SP-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-037.jpg',
        rarity: 'SP',
        box: 'YouthScroll'
    },
    {
        code: 'SP-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-039.jpg',
        rarity: 'SP',
        box: 'W4-T3'
    },
    {
        code: 'SP-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-040.jpg',
        rarity: 'SP',
        box: 'W4-T2'
    },
    {
        code: 'SP-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-041.jpg',
        rarity: 'SP',
        box: 'W4-T2'
    },
    {
        code: 'SP-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-042.jpg',
        rarity: 'SP',
        box: '?'
    },
    {
        code: 'SP-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-043.jpg',
        rarity: 'SP',
        box: 'W4-T3'
    },
    {
        code: 'SP-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-044.jpg',
        rarity: 'SP',
        box: 'W4-T3'
    },
    {
        code: 'SP-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-045.jpg',
        rarity: 'SP',
        box: 'W4-T4'
    },
    {
        code: 'SP-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-046.jpg',
        rarity: 'SP',
        box: 'W4-T4'
    },
    {
        code: 'SP-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-047.jpg',
        rarity: 'SP',
        box: 'W4-T4'
    },
    {
        code: 'SP-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-048.jpg',
        rarity: 'SP',
        box: 'EXPack4'
    },
    {
        code: 'SP-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-049.jpg',
        rarity: 'SP',
        box: 'W4-T4'
    },
    {
        code: 'SP-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-050.jpg',
        rarity: 'SP',
        box: 'W4-T3'
    },
    {
        code: 'SP-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-051.jpg',
        rarity: 'SP',
        box: 'W5-T2'
    },
    {
        code: 'SP-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-052.jpg',
        rarity: 'SP',
        box: 'W5-T2'
    },
    {
        code: 'SP-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-053.jpg',
        rarity: 'SP',
        box: 'W5-T2'
    },
    {
        code: 'SP-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-054.jpg',
        rarity: 'SP',
        box: 'W5-T2'
    },
    {
        code: 'SP-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-055.jpg',
        rarity: 'SP',
        box: 'W4-T1'
    },
    {
        code: 'SP-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-056.jpg',
        rarity: 'SP',
        box: 'W4-T1'
    },
    {
        code: 'SP-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-057.jpg',
        rarity: 'SP',
        box: 'W5-T3'
    },
    {
        code: 'SP-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-058.jpg',
        rarity: 'SP',
        box: 'W5-T3'
    },
    {
        code: 'SP-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-059.jpg',
        rarity: 'SP',
        box: 'W5-T3'
    },
    {
        code: 'SP-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-060.jpg',
        rarity: 'SP',
        box: 'W5-T3'
    },
    {
        code: 'SP-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-061.jpg',
        rarity: 'SP',
        box: 'W5-T4'
    },
    {
        code: 'SP-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-062.jpg',
        rarity: 'SP',
        box: 'ExPack5'
    },
    {
        code: 'SP-063',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-063.jpg',
        rarity: 'SP',
        box: 'W5-T4'
    },
    {
        code: 'SP-064',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-064.jpg',
        rarity: 'SP',
        box: 'W5-T4'
    },
    {
        code: 'SP-065',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-065.jpg',
        rarity: 'SP',
        box: 'W5-T4'
    },
    {
        code: 'SP-066',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-066.jpg',
        rarity: 'SP',
        box: 'W6-T2'
    },
    {
        code: 'SP-067',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-067.jpg',
        rarity: 'SP',
        box: 'W6-T2'
    },
    {
        code: 'SP-068',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-068.jpg',
        rarity: 'SP',
        box: 'W6-T2'
    },
    {
        code: 'SP-069',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SP-069.jpg',
        rarity: 'SP',
        box: 'W6-T2'
    },
    {
        code: 'SS-SP-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SP-001.jpg',
        rarity: 'SS-SP',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SP-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SP-002.jpg',
        rarity: 'SS-SP',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SP-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SP-003.jpg',
        rarity: 'SS-SP',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SP-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SP-004.jpg',
        rarity: 'SS-SP',
        box: 'NewYears'
    },
    {
        code: 'SS-SP-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SP-005.jpg',
        rarity: 'SS-SP',
        box: 'NewYears'
    },
    {
        code: 'SS-SP-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SP-006.jpg',
        rarity: 'SS-SP',
        box: 'NewYears'
    },
    {
        code: 'SS-SP-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SP-007.jpg',
        rarity: 'SS-SP',
        box: 'NewYears'
    },
    {
        code: 'CC-SP-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SP-001.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SP-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SP-002.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SP-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SP-003.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SP-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SP-004.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SP-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SP-005.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SP-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SP-006.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SP-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SP-001.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'CC-SP-001S',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-SP-001S.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SP-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SP-002.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SP-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SP-003.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-SP-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-SP-004.jpg',
        rarity: 'CC-SP',
        box: 'NinjaAge'
    },
    {
        code: 'OR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-001.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-002.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-003.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-004.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-005.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-006.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-007.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-008.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-009.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-010.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-011.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-012.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-013.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-014.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-015.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-016.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-017.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-018.jpg',
        rarity: 'OR',
        box: 'CloudBox'
    },
    {
        code: 'OR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-019.jpg',
        rarity: 'OR',
        box: 'W2-T1'
    },
    {
        code: 'OR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-020.jpg',
        rarity: 'OR',
        box: 'W2-T1'
    },
    {
        code: 'OR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-021.jpg',
        rarity: 'OR',
        box: 'W2-T1'
    },
    {
        code: 'OR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-022.jpg',
        rarity: 'OR',
        box: 'W2-T1'
    },
    {
        code: 'OR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-023.jpg',
        rarity: 'OR',
        box: 'W2-T1'
    },
    {
        code: 'OR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-024.jpg',
        rarity: 'OR',
        box: 'W2-T1'
    },
    {
        code: 'OR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-025.jpg',
        rarity: 'OR',
        box: 'W2-T2'
    },
    {
        code: 'OR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-026.jpg',
        rarity: 'OR',
        box: 'W2-T2'
    },
    {
        code: 'OR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-027.jpg',
        rarity: 'OR',
        box: 'W2-T3'
    },
    {
        code: 'OR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-028.jpg',
        rarity: 'OR',
        box: 'W2-T3'
    },
    {
        code: 'OR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-029.jpg',
        rarity: 'OR',
        box: 'W2-T3'
    },
    {
        code: 'OR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-030.jpg',
        rarity: 'OR',
        box: 'W2-T3'
    },
    {
        code: 'OR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-031.jpg',
        rarity: 'OR',
        box: 'W2-T3'
    },
    {
        code: 'OR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-032.jpg',
        rarity: 'OR',
        box: 'W2-T3'
    },
    {
        code: 'OR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-033.jpg',
        rarity: 'OR',
        box: 'W2-T4'
    },
    {
        code: 'OR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-034.jpg',
        rarity: 'OR',
        box: 'W2-T4'
    },
    {
        code: 'OR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-035.jpg',
        rarity: 'OR',
        box: 'W2-T4'
    },
    {
        code: 'OR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-036.jpg',
        rarity: 'OR',
        box: 'W2-T4'
    },
    {
        code: 'OR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-037.jpg',
        rarity: 'OR',
        box: 'W2-T4'
    },
    {
        code: 'OR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-038.jpg',
        rarity: 'OR',
        box: 'W2-T4'
    },
    {
        code: 'OR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-039.jpg',
        rarity: 'OR',
        box: 'W3-T1'
    },
    {
        code: 'OR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-040.jpg',
        rarity: 'OR',
        box: 'W3-T1'
    },
    {
        code: 'OR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-041.jpg',
        rarity: 'OR',
        box: 'W3-T1'
    },
    {
        code: 'OR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-042.jpg',
        rarity: 'OR',
        box: 'W3-T1'
    },
    {
        code: 'OR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-043.jpg',
        rarity: 'OR',
        box: 'W3-T2'
    },
    {
        code: 'OR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-044.jpg',
        rarity: 'OR',
        box: 'W3-T2'
    },
    {
        code: 'OR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-045.jpg',
        rarity: 'OR',
        box: 'W3-T2'
    },
    {
        code: 'OR-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-046.jpg',
        rarity: 'OR',
        box: 'W3-T2'
    },
    {
        code: 'OR-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-047.jpg',
        rarity: 'OR',
        box: 'W3-T3'
    },
    {
        code: 'OR-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-048.jpg',
        rarity: 'OR',
        box: 'W3-T3'
    },
    {
        code: 'OR-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-049.jpg',
        rarity: 'OR',
        box: 'W3-T3'
    },
    {
        code: 'OR-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-050.jpg',
        rarity: 'OR',
        box: 'W3-T3'
    },
    {
        code: 'OR-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-051.jpg',
        rarity: 'OR',
        box: 'W3-T3'
    },
    {
        code: 'OR-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-052.jpg',
        rarity: 'OR',
        box: 'W3-T3'
    },
    {
        code: 'OR-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-053.jpg',
        rarity: 'OR',
        box: 'W3-T4'
    },
    {
        code: 'OR-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-054.jpg',
        rarity: 'OR',
        box: 'W3-T4'
    },
    {
        code: 'OR-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-055.jpg',
        rarity: 'OR',
        box: 'W3-T4'
    },
    {
        code: 'OR-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-056.jpg',
        rarity: 'OR',
        box: 'W3-T4'
    },
    {
        code: 'OR-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-057.jpg',
        rarity: 'OR',
        box: 'W3-T4'
    },
    {
        code: 'OR-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-058.jpg',
        rarity: 'OR',
        box: 'W3-T4'
    },
    {
        code: 'OR-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-059.jpg',
        rarity: 'OR',
        box: 'W4-T2'
    },
    {
        code: 'OR-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-060.jpg',
        rarity: 'OR',
        box: 'W4-T2'
    },
    {
        code: 'OR-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-061.jpg',
        rarity: 'OR',
        box: 'W4-T2'
    },
    {
        code: 'OR-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-062.jpg',
        rarity: 'OR',
        box: 'W4-T2'
    },
    {
        code: 'OR-063',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-063.jpg',
        rarity: 'OR',
        box: 'W4-T2'
    },
    {
        code: 'OR-064',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-064.jpg',
        rarity: 'OR',
        box: 'W4-T2'
    },
    {
        code: 'OR-065',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-065.jpg',
        rarity: 'OR',
        box: 'W4-T2'
    },
    {
        code: 'OR-066',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-066.jpg',
        rarity: 'OR',
        box: 'W4-T2'
    },
    {
        code: 'OR-067',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-067.jpg',
        rarity: 'OR',
        box: 'W4-T3'
    },
    {
        code: 'OR-068',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-068.jpg',
        rarity: 'OR',
        box: 'W4-T3'
    },
    {
        code: 'OR-069',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-069.jpg',
        rarity: 'OR',
        box: 'W4-T3'
    },
    {
        code: 'OR-070',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-070.jpg',
        rarity: 'OR',
        box: 'W4-T3'
    },
    {
        code: 'OR-071',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-071.jpg',
        rarity: 'OR',
        box: 'W4-T3'
    },
    {
        code: 'OR-072',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-072.jpg',
        rarity: 'OR',
        box: 'W4-T3'
    },
    {
        code: 'OR-073',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-073.jpg',
        rarity: 'OR',
        box: 'W4-T4'
    },
    {
        code: 'OR-074',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-074.jpg',
        rarity: 'OR',
        box: 'W4-T4'
    },
    {
        code: 'OR-075',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-075.jpg',
        rarity: 'OR',
        box: 'W4-T4'
    },
    {
        code: 'OR-076',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-076.jpg',
        rarity: 'OR',
        box: 'W4-T4'
    },
    {
        code: 'OR-077',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-077.jpg',
        rarity: 'OR',
        box: 'W4-T4'
    },
    {
        code: 'OR-078',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-078.jpg',
        rarity: 'OR',
        box: 'W4-T4'
    },
    {
        code: 'OR-079',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-079.jpg',
        rarity: 'OR',
        box: 'W5-T2'
    },
    {
        code: 'OR-080',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-080.jpg',
        rarity: 'OR',
        box: 'W5-T2'
    },
    {
        code: 'OR-081',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-081.jpg',
        rarity: 'OR',
        box: 'W5-T2'
    },
    {
        code: 'OR-082',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-082.jpg',
        rarity: 'OR',
        box: 'W5-T2'
    },
    {
        code: 'OR-083',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-083.jpg',
        rarity: 'OR',
        box: 'W5-T2'
    },
    {
        code: 'OR-084',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-084.jpg',
        rarity: 'OR',
        box: 'W5-T2'
    },
    {
        code: 'OR-085',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-085.jpg',
        rarity: 'OR',
        box: 'W5-T2'
    },
    {
        code: 'OR-086',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-086.jpg',
        rarity: 'OR',
        box: 'W5-T2'
    },
    {
        code: 'OR-087',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-087.jpg',
        rarity: 'OR',
        box: 'W5-T3'
    },
    {
        code: 'OR-088',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-088.jpg',
        rarity: 'OR',
        box: 'W5-T3'
    },
    {
        code: 'OR-089',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-089.jpg',
        rarity: 'OR',
        box: 'W5-T3'
    },
    {
        code: 'OR-090',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-090.jpg',
        rarity: 'OR',
        box: 'W5-T3'
    },
    {
        code: 'OR-091',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-091.jpg',
        rarity: 'OR',
        box: 'W5-T3'
    },
    {
        code: 'OR-092',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-092.jpg',
        rarity: 'OR',
        box: 'W5-T3'
    },
    {
        code: 'OR-093',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-093.jpg',
        rarity: 'OR',
        box: 'W5-T4'
    },
    {
        code: 'OR-094',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-094.jpg',
        rarity: 'OR',
        box: 'W5-T4'
    },
    {
        code: 'OR-095',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-095.jpg',
        rarity: 'OR',
        box: 'W5-T4'
    },
    {
        code: 'OR-096',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-096.jpg',
        rarity: 'OR',
        box: 'W5-T4'
    },
    {
        code: 'OR-097',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-097.jpg',
        rarity: 'OR',
        box: 'W5-T4'
    },
    {
        code: 'OR-098',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-098.jpg',
        rarity: 'OR',
        box: 'W5-T4'
    },
    {
        code: 'OR-099',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-099.jpg',
        rarity: 'OR',
        box: 'W6-T2'
    },
    {
        code: 'OR-100',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-100.jpg',
        rarity: 'OR',
        box: 'W6-T2'
    },
    {
        code: 'OR-101',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-101.jpg',
        rarity: 'OR',
        box: 'W6-T2'
    },
    {
        code: 'OR-102',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-102.jpg',
        rarity: 'OR',
        box: 'W6-T2'
    },
    {
        code: 'OR-103',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-103.jpg',
        rarity: 'OR',
        box: 'W6-T2'
    },
    {
        code: 'OR-104',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-104.jpg',
        rarity: 'OR',
        box: 'W6-T2'
    },
    {
        code: 'OR-105',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-105.jpg',
        rarity: 'OR',
        box: 'W6-T2'
    },
    {
        code: 'OR-106',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/OR-106.jpg',
        rarity: 'OR',
        box: 'W6-T2'
    },
    {
        code: 'SS-OR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-OR-001.jpg',
        rarity: 'SS-OR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-OR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-OR-002.jpg',
        rarity: 'SS-OR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-OR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-OR-003.jpg',
        rarity: 'SS-OR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-OR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-OR-004.jpg',
        rarity: 'SS-OR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-OR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-OR-005.jpg',
        rarity: 'SS-OR',
        box: 'Heaven&Earth'
    },
    {
        code: 'CP-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-001.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'CP-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-002.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'CP-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-003.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'CP-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-004.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'CP-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-005.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'CP-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-006.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'CP-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-007.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'CP-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-008.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'CP-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-009.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'CP-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CP-010.jpg',
        rarity: 'CP',
        box: 'CloudBox'
    },
    {
        code: 'TR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-001.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-002.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-003.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-004.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-005.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-006.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-007.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-008.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-009.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-010.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-011.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-012.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-013.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-014.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-015.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-016.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-017.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-018.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-019.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-020.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-021.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-022.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-023.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-024.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-025.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-026.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-027.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-028.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-029.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-030.jpg',
        rarity: 'TR',
        box: 'W1-T3'
    },
    {
        code: 'TR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-031.jpg',
        rarity: 'TR',
        box: 'W2-T3'
    },
    {
        code: 'TR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-032.jpg',
        rarity: 'TR',
        box: 'W2-T3'
    },
    {
        code: 'TR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-033.jpg',
        rarity: 'TR',
        box: 'W2-T3'
    },
    {
        code: 'TR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-034.jpg',
        rarity: 'TR',
        box: 'W2-T3'
    },
    {
        code: 'TR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-035.jpg',
        rarity: 'TR',
        box: 'W2-T3'
    },
    {
        code: 'TR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-036.jpg',
        rarity: 'TR',
        box: 'W2-T3'
    },
    {
        code: 'TR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-037.jpg',
        rarity: 'TR',
        box: 'W2-T3'
    },
    {
        code: 'TR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-038.jpg',
        rarity: 'TR',
        box: 'W2-T3'
    },
    {
        code: 'TR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-039.jpg',
        rarity: 'TR',
        box: 'W3-T3'
    },
    {
        code: 'TR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-040.jpg',
        rarity: 'TR',
        box: 'W3-T3'
    },
    {
        code: 'TR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-041.jpg',
        rarity: 'TR',
        box: 'W3-T3'
    },
    {
        code: 'TR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-042.jpg',
        rarity: 'TR',
        box: 'W3-T3'
    },
    {
        code: 'TR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-043.jpg',
        rarity: 'TR',
        box: 'W3-T3'
    },
    {
        code: 'TR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-044.jpg',
        rarity: 'TR',
        box: 'W3-T3'
    },
    {
        code: 'TR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-045.jpg',
        rarity: 'TR',
        box: 'W3-T3'
    },
    {
        code: 'TR-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-046.jpg',
        rarity: 'TR',
        box: 'W3-T3'
    },
    {
        code: 'TR-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-047.jpg',
        rarity: 'TR',
        box: 'W4-T3'
    },
    {
        code: 'TR-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-048.jpg',
        rarity: 'TR',
        box: 'W4-T3'
    },
    {
        code: 'TR-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-049.jpg',
        rarity: 'TR',
        box: 'W4-T3'
    },
    {
        code: 'TR-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-050.jpg',
        rarity: 'TR',
        box: 'W4-T3'
    },
    {
        code: 'TR-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-051.jpg',
        rarity: 'TR',
        box: 'W4-T3'
    },
    {
        code: 'TR-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-052.jpg',
        rarity: 'TR',
        box: 'W4-T3'
    },
    {
        code: 'TR-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-053.jpg',
        rarity: 'TR',
        box: 'W4-T3'
    },
    {
        code: 'TR-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-054.jpg',
        rarity: 'TR',
        box: 'W4-T3'
    },
    {
        code: 'TR-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-055.jpg',
        rarity: 'TR',
        box: 'W5-T3'
    },
    {
        code: 'TR-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-056.jpg',
        rarity: 'TR',
        box: 'W5-T3'
    },
    {
        code: 'TR-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-057.jpg',
        rarity: 'TR',
        box: 'W5-T3'
    },
    {
        code: 'TR-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-058.jpg',
        rarity: 'TR',
        box: 'W5-T3'
    },
    {
        code: 'TR-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-059.jpg',
        rarity: 'TR',
        box: 'W5-T3'
    },
    {
        code: 'TR-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-060.jpg',
        rarity: 'TR',
        box: 'W5-T3'
    },
    {
        code: 'TR-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-061.jpg',
        rarity: 'TR',
        box: 'W5-T3'
    },
    {
        code: 'TR-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TR-062.jpg',
        rarity: 'TR',
        box: 'W5-T3'
    },
    {
        code: 'TGR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-001.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-002.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-003.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-004.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-005.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-006.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-007.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-008.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-009.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-010.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-011.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-012.jpg',
        rarity: 'TGR',
        box: 'W1-T3'
    },
    {
        code: 'TGR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-013.jpg',
        rarity: 'TGR',
        box: 'W2-T3'
    },
    {
        code: 'TGR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-014.jpg',
        rarity: 'TGR',
        box: 'W2-T3'
    },
    {
        code: 'TGR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-015.jpg',
        rarity: 'TGR',
        box: 'W2-T3'
    },
    {
        code: 'TGR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-016.jpg',
        rarity: 'TGR',
        box: 'W2-T3'
    },
    {
        code: 'TGR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-017.jpg',
        rarity: 'TGR',
        box: 'W2-T3'
    },
    {
        code: 'TGR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-018.jpg',
        rarity: 'TGR',
        box: 'W2-T3'
    },
    {
        code: 'TGR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-019.jpg',
        rarity: 'TGR',
        box: 'W2-T3'
    },
    {
        code: 'TGR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-020.jpg',
        rarity: 'TGR',
        box: 'W2-T3'
    },
    {
        code: 'TGR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-021.jpg',
        rarity: 'TGR',
        box: 'W3-T3'
    },
    {
        code: 'TGR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-022.jpg',
        rarity: 'TGR',
        box: 'W3-T3'
    },
    {
        code: 'TGR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-023.jpg',
        rarity: 'TGR',
        box: 'W3-T3'
    },
    {
        code: 'TGR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-024.jpg',
        rarity: 'TGR',
        box: 'W3-T3'
    },
    {
        code: 'TGR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-025.jpg',
        rarity: 'TGR',
        box: 'W3-T3'
    },
    {
        code: 'TGR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-026.jpg',
        rarity: 'TGR',
        box: 'W3-T3'
    },
    {
        code: 'TGR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-027.jpg',
        rarity: 'TGR',
        box: 'W3-T3'
    },
    {
        code: 'TGR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-028.jpg',
        rarity: 'TGR',
        box: 'W3-T3'
    },
    {
        code: 'TGR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-029.jpg',
        rarity: 'TGR',
        box: 'W4-T3'
    },
    {
        code: 'TGR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-030.jpg',
        rarity: 'TGR',
        box: 'W4-T3'
    },
    {
        code: 'TGR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-031.jpg',
        rarity: 'TGR',
        box: 'W4-T3'
    },
    {
        code: 'TGR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-032.jpg',
        rarity: 'TGR',
        box: 'W4-T3'
    },
    {
        code: 'TGR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-033.jpg',
        rarity: 'TGR',
        box: 'W4-T3'
    },
    {
        code: 'TGR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-034.jpg',
        rarity: 'TGR',
        box: 'W4-T3'
    },
    {
        code: 'TGR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-035.jpg',
        rarity: 'TGR',
        box: 'W4-T3'
    },
    {
        code: 'TGR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-036.jpg',
        rarity: 'TGR',
        box: 'W4-T3'
    },
    {
        code: 'TGR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-037.jpg',
        rarity: 'TGR',
        box: 'W5-T3'
    },
    {
        code: 'TGR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-038.jpg',
        rarity: 'TGR',
        box: 'W5-T3'
    },
    {
        code: 'TGR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-039.jpg',
        rarity: 'TGR',
        box: 'W5-T3'
    },
    {
        code: 'TGR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-040.jpg',
        rarity: 'TGR',
        box: 'W5-T3'
    },
    {
        code: 'TGR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-041.jpg',
        rarity: 'TGR',
        box: 'W5-T3'
    },
    {
        code: 'TGR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-042.jpg',
        rarity: 'TGR',
        box: 'W5-T3'
    },
    {
        code: 'TGR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-043.jpg',
        rarity: 'TGR',
        box: 'W5-T3'
    },
    {
        code: 'TGR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/TGR-044.jpg',
        rarity: 'TGR',
        box: 'W5-T3'
    },
    {
        code: 'AR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-001.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-002.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-003.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-004.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-005.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-006.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-007.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-008.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-009.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-010.jpg',
        rarity: 'AR',
        box: 'W1-T3'
    },
    {
        code: 'AR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-011.jpg',
        rarity: 'AR',
        box: 'W1-T4'
    },
    {
        code: 'AR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-012.jpg',
        rarity: 'AR',
        box: 'W1-T4'
    },
    {
        code: 'AR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-013.jpg',
        rarity: 'AR',
        box: 'W2-T2'
    },
    {
        code: 'AR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-014.jpg',
        rarity: 'AR',
        box: 'W2-T2'
    },
    {
        code: 'AR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-015.jpg',
        rarity: 'AR',
        box: 'W2-T2'
    },
    {
        code: 'AR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-016.jpg',
        rarity: 'AR',
        box: 'W2-T2'
    },
    {
        code: 'AR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-017.jpg',
        rarity: 'AR',
        box: 'W2-T2'
    },
    {
        code: 'AR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-018.jpg',
        rarity: 'AR',
        box: 'W2-T2'
    },
    {
        code: 'AR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-019.jpg',
        rarity: 'AR',
        box: 'W2-T4'
    },
    {
        code: 'AR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-020.jpg',
        rarity: 'AR',
        box: 'W2-T3'
    },
    {
        code: 'AR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-021.jpg',
        rarity: 'AR',
        box: 'W2-T3'
    },
    {
        code: 'AR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-022.jpg',
        rarity: 'AR',
        box: 'W2-T4'
    },
    {
        code: 'AR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-023.jpg',
        rarity: 'AR',
        box: 'W2-T3'
    },
    {
        code: 'AR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-024.jpg',
        rarity: 'AR',
        box: 'W2-T3'
    },
    {
        code: 'AR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-025.jpg',
        rarity: 'AR',
        box: 'W3-T2'
    },
    {
        code: 'AR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-026.jpg',
        rarity: 'AR',
        box: 'W3-T2'
    },
    {
        code: 'AR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-027.jpg',
        rarity: 'AR',
        box: 'W3-T2'
    },
    {
        code: 'AR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-028.jpg',
        rarity: 'AR',
        box: 'W3-T2'
    },
    {
        code: 'AR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-029.jpg',
        rarity: 'AR',
        box: 'W3-T2'
    },
    {
        code: 'AR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-030.jpg',
        rarity: 'AR',
        box: 'W3-T2'
    },
    {
        code: 'AR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-031.jpg',
        rarity: 'AR',
        box: 'W3-T3'
    },
    {
        code: 'AR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-032.jpg',
        rarity: 'AR',
        box: 'W3-T3'
    },
    {
        code: 'AR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-033.jpg',
        rarity: 'AR',
        box: 'W3-T3'
    },
    {
        code: 'AR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-034.jpg',
        rarity: 'AR',
        box: 'W3-T4'
    },
    {
        code: 'AR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-035.jpg',
        rarity: 'AR',
        box: 'W3-T4'
    },
    {
        code: 'AR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-036.jpg',
        rarity: 'AR',
        box: 'W3-T4'
    },
    {
        code: 'AR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-037.jpg',
        rarity: 'AR',
        box: 'W4-T2'
    },
    {
        code: 'AR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-038.jpg',
        rarity: 'AR',
        box: 'W4-T2'
    },
    {
        code: 'AR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-039.jpg',
        rarity: 'AR',
        box: 'W4-T2'
    },
    {
        code: 'AR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-040.jpg',
        rarity: 'AR',
        box: 'W4-T2'
    },
    {
        code: 'AR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-041.jpg',
        rarity: 'AR',
        box: 'W4-T2'
    },
    {
        code: 'AR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-042.jpg',
        rarity: 'AR',
        box: 'W4-T2'
    },
    {
        code: 'AR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-043.jpg',
        rarity: 'AR',
        box: 'W4-T3'
    },
    {
        code: 'AR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-044.jpg',
        rarity: 'AR',
        box: 'W4-T3'
    },
    {
        code: 'AR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-045.jpg',
        rarity: 'AR',
        box: 'W4-T3'
    },
    {
        code: 'AR-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-046.jpg',
        rarity: 'AR',
        box: 'W4-T4'
    },
    {
        code: 'AR-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-047.jpg',
        rarity: 'AR',
        box: 'W4-T4'
    },
    {
        code: 'AR-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-048.jpg',
        rarity: 'AR',
        box: 'W4-T4'
    },
    {
        code: 'AR-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-049.jpg',
        rarity: 'AR',
        box: 'W5-T2'
    },
    {
        code: 'AR-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-050.jpg',
        rarity: 'AR',
        box: 'W5-T2'
    },
    {
        code: 'AR-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-051.jpg',
        rarity: 'AR',
        box: 'W5-T2'
    },
    {
        code: 'AR-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-052.jpg',
        rarity: 'AR',
        box: 'W5-T2'
    },
    {
        code: 'AR-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-053.jpg',
        rarity: 'AR',
        box: 'W5-T2'
    },
    {
        code: 'AR-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-054.jpg',
        rarity: 'AR',
        box: 'W5-T2'
    },
    {
        code: 'AR-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-055.jpg',
        rarity: 'AR',
        box: 'W5-T3'
    },
    {
        code: 'AR-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-056.jpg',
        rarity: 'AR',
        box: 'W5-T3'
    },
    {
        code: 'AR-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-057.jpg',
        rarity: 'AR',
        box: 'W5-T3'
    },
    {
        code: 'AR-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-058.jpg',
        rarity: 'AR',
        box: 'W5-T4'
    },
    {
        code: 'AR-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-059.jpg',
        rarity: 'AR',
        box: 'W5-T4'
    },
    {
        code: 'AR-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-060.jpg',
        rarity: 'AR',
        box: 'W5-T4'
    },
    {
        code: 'AR-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-061.jpg',
        rarity: 'AR',
        box: 'W6-T2'
    },
    {
        code: 'AR-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-062.jpg',
        rarity: 'AR',
        box: 'W6-T2'
    },
    {
        code: 'AR-063',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-063.jpg',
        rarity: 'AR',
        box: 'W6-T2'
    },
    {
        code: 'AR-064',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-064.jpg',
        rarity: 'AR',
        box: 'W6-T2'
    },
    {
        code: 'AR-065',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-065.jpg',
        rarity: 'AR',
        box: 'W6-T2'
    },
    {
        code: 'AR-066',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/AR-066.jpg',
        rarity: 'AR',
        box: 'W6-T2'
    },
    {
        code: 'SS-AR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-AR-001.jpg',
        rarity: 'SS-AR',
        box: 'NewYears'
    },
    {
        code: 'SS-AR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-AR-002.jpg',
        rarity: 'SS-AR',
        box: 'NewYears'
    },
    {
        code: 'SS-AR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-AR-003.jpg',
        rarity: 'SS-AR',
        box: 'NewYears'
    },
    {
        code: 'SS-AR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-AR-004.jpg',
        rarity: 'SS-AR',
        box: 'NewYears'
    },
    {
        code: 'SLR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-001.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-002.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-003.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-004.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-005.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-006.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-007.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-008.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-009.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-010.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-011.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-012.jpg',
        rarity: 'SLR',
        box: 'W1-T4'
    },
    {
        code: 'SLR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-013.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-014.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-015.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-016.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-017.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-018.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-019.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-020.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-021.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-022.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-023.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-024.jpg',
        rarity: 'SLR',
        box: 'W2-T4'
    },
    {
        code: 'SLR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-025.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-026.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-027.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-028.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-029.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-030.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-031.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-032.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-033.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-034.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-035.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-036.jpg',
        rarity: 'SLR',
        box: 'W3-T4'
    },
    {
        code: 'SLR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-037.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-038.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-039.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-040.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-041.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-042.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-043.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-044.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-045.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-046.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-047.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-048.jpg',
        rarity: 'SLR',
        box: 'W4-T4'
    },
    {
        code: 'SLR-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-049.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-050.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-051.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-052.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-053.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-054.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-055.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-056.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-057.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-058.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-059.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR-060.jpg',
        rarity: 'SLR',
        box: 'W5-T4'
    },
    {
        code: 'SLR--001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--001.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--002.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--003.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--004.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--005.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--006.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--007.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--008.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--009.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--010.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--011.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--012.jpg',
        rarity: 'SLR-',
        box: 'W1-T4'
    },
    {
        code: 'SLR--013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--013.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--014.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--015.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--016.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--017.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--018.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--019.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--020.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--021.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--022.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--023.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--024.jpg',
        rarity: 'SLR-',
        box: 'W2-T4'
    },
    {
        code: 'SLR--025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--025.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--026.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--027.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--028.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--029.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--030.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--031.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--032.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--033.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--034.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--035.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--036.jpg',
        rarity: 'SLR-',
        box: 'W3-T4'
    },
    {
        code: 'SLR--037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--037.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--038.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--039.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--040.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--041.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--042.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--043.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--044.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--045.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--046.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--047.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--048.jpg',
        rarity: 'SLR-',
        box: 'W4-T4'
    },
    {
        code: 'SLR--049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--049.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--050.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--051.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--052.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--053.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--054.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--055.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--056.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--057.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--058.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--059.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'SLR--060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SLR--060.jpg',
        rarity: 'SLR-',
        box: 'W5-T4'
    },
    {
        code: 'HR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-001.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-002.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-003.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-004.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-005.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-006.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-007.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-008.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-009.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-010.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-011.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-012.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-013.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-014.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-015.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-016.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-017.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-018.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-019.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-020.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-021.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-022.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-023.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-024.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-025.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-026.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-027.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-028.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-029.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-030.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-031.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-032.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-033.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-034.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-035.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-036.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-037.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-038.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-039.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-040.jpg',
        rarity: 'HR',
        box: 'W1-T4'
    },
    {
        code: 'HR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-041.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-042.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-043.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-044.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-045.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-046.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-047.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-048.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-049.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-050.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-051.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-052.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-053.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-054.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-055.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-056.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-057.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-058.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-059.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-060.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-061.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-062.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-063',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-063.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-064',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-064.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-065',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-065.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-066',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-066.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-067',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-067.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-068',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-068.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-069',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-069.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-070',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-070.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-071',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-071.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-072',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-072.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-073',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-073.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-074',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-074.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-075',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-075.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-076',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-076.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-077',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-077.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-078',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-078.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-079',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-079.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-080',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-080.jpg',
        rarity: 'HR',
        box: 'W2-T4'
    },
    {
        code: 'HR-081',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-081.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-082',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-082.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-083',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-083.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-084',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-084.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-085',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-085.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-086',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-086.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-087',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-087.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-088',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-088.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-089',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-089.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-090',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-090.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-091',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-091.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-092',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-092.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-093',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-093.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-094',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-094.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-095',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-095.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-096',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-096.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-097',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-097.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-098',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-098.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-099',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-099.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-100',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-100.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-101',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-101.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-102',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-102.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-103',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-103.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-104',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-104.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-105',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-105.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-106',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-106.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-107',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-107.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-108',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-108.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-109',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-109.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-110',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-110.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-111',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-111.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-112',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-112.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-113',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-113.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-114',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-114.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-115',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-115.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-116',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-116.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-117',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-117.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-118',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-118.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-119',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-119.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-120',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-120.jpg',
        rarity: 'HR',
        box: 'W3-T4'
    },
    {
        code: 'HR-121',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-121.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-122',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-122.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-123',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-123.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-124',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-124.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-125',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-125.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-126',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-126.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-127',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-127.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-128',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-128.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-129',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-129.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-130',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-130.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-131',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-131.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-132',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-132.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-133',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-133.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-134',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-134.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-135',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-135.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-136',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-136.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-137',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-137.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-138',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-138.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-139',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-139.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-140',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-140.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-141',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-141.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-142',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-142.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-143',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-143.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-144',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-144.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-145',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-145.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-146',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-146.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-147',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-147.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-148',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-148.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-149',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-149.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-150',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-150.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-151',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-151.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-152',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-152.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-153',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-153.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-154',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-154.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-155',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-155.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-156',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-156.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-157',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-157.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-158',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-158.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-159',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-159.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-160',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-160.jpg',
        rarity: 'HR',
        box: 'W4-T4'
    },
    {
        code: 'HR-161',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-161.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-162',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-162.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-163',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-163.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-164',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-164.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-165',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-165.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-166',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-166.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-167',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-167.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-168',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-168.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-169',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-169.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-170',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-170.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-171',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-171.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-172',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-172.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-173',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-173.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-174',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-174.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-175',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-175.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-176',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-176.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-177',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-177.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-178',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-178.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-179',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-179.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-180',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-180.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-181',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-181.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-182',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-182.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-183',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-183.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-184',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-184.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-185',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-185.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-186',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-186.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-187',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-187.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-188',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-188.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-189',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-189.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-190',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-190.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-191',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-191.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-192',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-192.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-193',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-193.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-194',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-194.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-195',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-195.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-196',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-196.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-197',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-197.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-198',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-198.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-199',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-199.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'HR-200',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/HR-200.jpg',
        rarity: 'HR',
        box: 'W5-T4'
    },
    {
        code: 'SS-HR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-001.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-002.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-003.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-004.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-005.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-006.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-007.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-008.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-009.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-010.jpg',
        rarity: 'SS-HR',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-HR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-011.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'SS-HR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-012.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'SS-HR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-013.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'SS-HR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-014.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'SS-HR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-015.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'SS-HR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-016.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'SS-HR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-017.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'SS-HR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-018.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'SS-HR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-019.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'SS-HR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-HR-020.jpg',
        rarity: 'SS-HR',
        box: 'NewYears'
    },
    {
        code: 'MR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-001.jpg',
        rarity: 'MR',
        box: 'W2-T1'
    },
    {
        code: 'MR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-002.jpg',
        rarity: 'MR',
        box: 'W2-T2'
    },
    {
        code: 'MR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-003.jpg',
        rarity: 'MR',
        box: 'W2-T2'
    },
    {
        code: 'MR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-004.jpg',
        rarity: 'MR',
        box: 'W2-T2'
    },
    {
        code: 'MR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-005.jpg',
        rarity: 'MR',
        box: 'W2-T1'
    },
    {
        code: 'MR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-006.jpg',
        rarity: 'MR',
        box: 'W2-T2'
    },
    {
        code: 'MR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-007.jpg',
        rarity: 'MR',
        box: 'W2-T2'
    },
    {
        code: 'MR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-008.jpg',
        rarity: 'MR',
        box: 'W2-T2'
    },
    {
        code: 'MR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-009.jpg',
        rarity: 'MR',
        box: 'W2-T3'
    },
    {
        code: 'MR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-010.jpg',
        rarity: 'MR',
        box: 'W2-T3'
    },
    {
        code: 'MR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-011.jpg',
        rarity: 'MR',
        box: 'W2-T3'
    },
    {
        code: 'MR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-012.jpg',
        rarity: 'MR',
        box: 'W2-T3'
    },
    {
        code: 'MR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-013.jpg',
        rarity: 'MR',
        box: 'W2-T4'
    },
    {
        code: 'MR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-014.jpg',
        rarity: 'MR',
        box: 'W2-T4'
    },
    {
        code: 'MR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-015.jpg',
        rarity: 'MR',
        box: 'W3-T2'
    },
    {
        code: 'MR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-016.jpg',
        rarity: 'MR',
        box: 'W3-T2'
    },
    {
        code: 'MR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-017.jpg',
        rarity: 'MR',
        box: 'W3-T2'
    },
    {
        code: 'MR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-018.jpg',
        rarity: 'MR',
        box: 'W3-T2'
    },
    {
        code: 'MR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-019.jpg',
        rarity: 'MR',
        box: 'W3-T2'
    },
    {
        code: 'MR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-020.jpg',
        rarity: 'MR',
        box: 'W3-T2'
    },
    {
        code: 'MR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-021.jpg',
        rarity: 'MR',
        box: 'W3-T2'
    },
    {
        code: 'MR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-022.jpg',
        rarity: 'MR',
        box: 'W3-T2'
    },
    {
        code: 'MR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-023.jpg',
        rarity: 'MR',
        box: 'W3-T3'
    },
    {
        code: 'MR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-024.jpg',
        rarity: 'MR',
        box: 'W3-T3'
    },
    {
        code: 'MR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-025.jpg',
        rarity: 'MR',
        box: 'W3-T3'
    },
    {
        code: 'MR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-026.jpg',
        rarity: 'MR',
        box: 'W3-T4'
    },
    {
        code: 'MR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-027.jpg',
        rarity: 'MR',
        box: 'W3-T4'
    },
    {
        code: 'MR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-028.jpg',
        rarity: 'MR',
        box: 'W3-T4'
    },
    {
        code: 'MR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-029.jpg',
        rarity: 'MR',
        box: 'W4-T2'
    },
    {
        code: 'MR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-030.jpg',
        rarity: 'MR',
        box: 'W4-T2'
    },
    {
        code: 'MR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-031.jpg',
        rarity: 'MR',
        box: 'W4-T2'
    },
    {
        code: 'MR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-032.jpg',
        rarity: 'MR',
        box: 'W4-T2'
    },
    {
        code: 'MR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-033.jpg',
        rarity: 'MR',
        box: 'W4-T2'
    },
    {
        code: 'MR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-034.jpg',
        rarity: 'MR',
        box: 'W4-T2'
    },
    {
        code: 'MR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-035.jpg',
        rarity: 'MR',
        box: 'W4-T2'
    },
    {
        code: 'MR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-036.jpg',
        rarity: 'MR',
        box: 'W4-T2'
    },
    {
        code: 'MR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-037.jpg',
        rarity: 'MR',
        box: 'W4-T3'
    },
    {
        code: 'MR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-038.jpg',
        rarity: 'MR',
        box: 'W4-T3'
    },
    {
        code: 'MR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-039.jpg',
        rarity: 'MR',
        box: 'W4-T3'
    },
    {
        code: 'MR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-040.jpg',
        rarity: 'MR',
        box: 'W4-T4'
    },
    {
        code: 'MR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-041.jpg',
        rarity: 'MR',
        box: 'W4-T4'
    },
    {
        code: 'MR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-042.jpg',
        rarity: 'MR',
        box: 'W4-T4'
    },
    {
        code: 'MR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-043.jpg',
        rarity: 'MR',
        box: 'W5-T2'
    },
    {
        code: 'MR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-044.jpg',
        rarity: 'MR',
        box: 'W5-T2'
    },
    {
        code: 'MR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-045.jpg',
        rarity: 'MR',
        box: 'W5-T2'
    },
    {
        code: 'MR-046',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-046.jpg',
        rarity: 'MR',
        box: 'W5-T2'
    },
    {
        code: 'MR-047',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-047.jpg',
        rarity: 'MR',
        box: 'W5-T2'
    },
    {
        code: 'MR-048',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-048.jpg',
        rarity: 'MR',
        box: 'W5-T2'
    },
    {
        code: 'MR-049',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-049.jpg',
        rarity: 'MR',
        box: 'W5-T2'
    },
    {
        code: 'MR-050',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-050.jpg',
        rarity: 'MR',
        box: 'W5-T2'
    },
    {
        code: 'MR-051',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-051.jpg',
        rarity: 'MR',
        box: 'W5-T3'
    },
    {
        code: 'MR-052',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-052.jpg',
        rarity: 'MR',
        box: 'W5-T3'
    },
    {
        code: 'MR-053',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-053.jpg',
        rarity: 'MR',
        box: 'W5-T3'
    },
    {
        code: 'MR-054',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-054.jpg',
        rarity: 'MR',
        box: 'W5-T3'
    },
    {
        code: 'MR-055',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-055.jpg',
        rarity: 'MR',
        box: 'W5-T4'
    },
    {
        code: 'MR-056',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-056.jpg',
        rarity: 'MR',
        box: 'W5-T4'
    },
    {
        code: 'MR-057',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-057.jpg',
        rarity: 'MR',
        box: 'W5-T4'
    },
    {
        code: 'MR-058',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-058.jpg',
        rarity: 'MR',
        box: 'W5-T4'
    },
    {
        code: 'MR-059',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-059.jpg',
        rarity: 'MR',
        box: 'W6-T2'
    },
    {
        code: 'MR-060',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-060.jpg',
        rarity: 'MR',
        box: 'W6-T2'
    },
    {
        code: 'MR-061',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-061.jpg',
        rarity: 'MR',
        box: 'W6-T2'
    },
    {
        code: 'MR-062',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/MR-062.jpg',
        rarity: 'MR',
        box: 'W6-T2'
    },
    {
        code: 'CC-MR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-MR-001.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-MR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-MR-002.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-MR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-MR-003.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-MR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-MR-004.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-MR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-MR-005.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-MR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-MR-001.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-MR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-MR-002.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-MR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-MR-003.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-MR-001P',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-MR-001P.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-MR-002P',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-MR-002P.jpg',
        rarity: 'CC-MR',
        box: 'NinjaAge'
    },
    {
        code: 'GP-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-001.jpg',
        rarity: 'GP',
        box: 'W2-T1'
    },
    {
        code: 'GP-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-002.jpg',
        rarity: 'GP',
        box: 'W2-T1'
    },
    {
        code: 'GP-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-003.jpg',
        rarity: 'GP',
        box: 'W2-T1'
    },
    {
        code: 'GP-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-004.jpg',
        rarity: 'GP',
        box: 'W2-T1'
    },
    {
        code: 'GP-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-005.jpg',
        rarity: 'GP',
        box: 'W2-T1'
    },
    {
        code: 'GP-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-006.jpg',
        rarity: 'GP',
        box: 'W2-T1'
    },
    {
        code: 'GP-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-007.jpg',
        rarity: 'GP',
        box: 'W2-T1'
    },
    {
        code: 'GP-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-008.jpg',
        rarity: 'GP',
        box: 'W2-T1'
    },
    {
        code: 'GP-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-009.jpg',
        rarity: 'GP',
        box: 'W3-T1'
    },
    {
        code: 'GP-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-010.jpg',
        rarity: 'GP',
        box: 'W3-T1'
    },
    {
        code: 'GP-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-011.jpg',
        rarity: 'GP',
        box: 'W3-T1'
    },
    {
        code: 'GP-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-012.jpg',
        rarity: 'GP',
        box: 'W3-T1'
    },
    {
        code: 'GP-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-013.jpg',
        rarity: 'GP',
        box: 'W3-T1'
    },
    {
        code: 'GP-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-014.jpg',
        rarity: 'GP',
        box: 'W3-T1'
    },
    {
        code: 'GP-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-015.jpg',
        rarity: 'GP',
        box: 'W3-T1'
    },
    {
        code: 'GP-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-016.jpg',
        rarity: 'GP',
        box: 'W3-T1'
    },
    {
        code: 'GP-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-017.jpg',
        rarity: 'GP',
        box: 'W4-T1'
    },
    {
        code: 'GP-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-018.jpg',
        rarity: 'GP',
        box: 'W4-T1'
    },
    {
        code: 'GP-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-019.jpg',
        rarity: 'GP',
        box: 'W4-T1'
    },
    {
        code: 'GP-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-020.jpg',
        rarity: 'GP',
        box: 'W4-T1'
    },
    {
        code: 'GP-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-021.jpg',
        rarity: 'GP',
        box: 'W4-T1'
    },
    {
        code: 'GP-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-022.jpg',
        rarity: 'GP',
        box: 'W4-T1'
    },
    {
        code: 'GP-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-023.jpg',
        rarity: 'GP',
        box: 'W4-T1'
    },
    {
        code: 'GP-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/GP-024.jpg',
        rarity: 'GP',
        box: 'W4-T1'
    },
    {
        code: 'CR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-001.jpg',
        rarity: 'CR',
        box: 'W2-T2'
    },
    {
        code: 'CR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-002.jpg',
        rarity: 'CR',
        box: 'W2-T2'
    },
    {
        code: 'CR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-003.jpg',
        rarity: 'CR',
        box: 'W2-T2'
    },
    {
        code: 'CR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-004.jpg',
        rarity: 'CR',
        box: 'W2-T2'
    },
    {
        code: 'CR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-005.jpg',
        rarity: 'CR',
        box: 'W3-T2'
    },
    {
        code: 'CR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-006.jpg',
        rarity: 'CR',
        box: 'W3-T2'
    },
    {
        code: 'CR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-007.jpg',
        rarity: 'CR',
        box: 'W3-T2'
    },
    {
        code: 'CR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-008.jpg',
        rarity: 'CR',
        box: 'W3-T2'
    },
    {
        code: 'CR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-009.jpg',
        rarity: 'CR',
        box: 'YouthScroll'
    },
    {
        code: 'CR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-010.jpg',
        rarity: 'CR',
        box: 'YouthScroll'
    },
    {
        code: 'CR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-011.jpg',
        rarity: 'CR',
        box: 'W4-T2'
    },
    {
        code: 'CR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-012.jpg',
        rarity: 'CR',
        box: 'W4-T2'
    },
    {
        code: 'CR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-013.jpg',
        rarity: 'CR',
        box: 'W4-T2'
    },
    {
        code: 'CR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-014.jpg',
        rarity: 'CR',
        box: 'W4-T2'
    },
    {
        code: 'CR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-015.jpg',
        rarity: 'CR',
        box: 'W5-T2'
    },
    {
        code: 'CR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-016.jpg',
        rarity: 'CR',
        box: 'W5-T2'
    },
    {
        code: 'CR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-017.jpg',
        rarity: 'CR',
        box: 'W5-T2'
    },
    {
        code: 'CR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-018.jpg',
        rarity: 'CR',
        box: 'W5-T2'
    },
    {
        code: 'CR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-019.jpg',
        rarity: 'CR',
        box: 'W6-T2'
    },
    {
        code: 'CR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-020.jpg',
        rarity: 'CR',
        box: 'W6-T2'
    },
    {
        code: 'CR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-021.jpg',
        rarity: 'CR',
        box: 'W6-T2'
    },
    {
        code: 'CR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CR-022.jpg',
        rarity: 'CR',
        box: 'W6-T2'
    },
    {
        code: 'NR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-001.jpg',
        rarity: 'NR',
        box: 'W2-T3'
    },
    {
        code: 'NR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-002.jpg',
        rarity: 'NR',
        box: 'W2-T3'
    },
    {
        code: 'NR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-003.jpg',
        rarity: 'NR',
        box: 'W2-T3'
    },
    {
        code: 'NR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-004.jpg',
        rarity: 'NR',
        box: 'W2-T3'
    },
    {
        code: 'NR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-005.jpg',
        rarity: 'NR',
        box: 'W2-T3'
    },
    {
        code: 'NR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-006.jpg',
        rarity: 'NR',
        box: 'W2-T3'
    },
    {
        code: 'NR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-007.jpg',
        rarity: 'NR',
        box: 'W3-T3'
    },
    {
        code: 'NR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-008.jpg',
        rarity: 'NR',
        box: 'W3-T3'
    },
    {
        code: 'NR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-009.jpg',
        rarity: 'NR',
        box: 'W3-T3'
    },
    {
        code: 'NR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-010.jpg',
        rarity: 'NR',
        box: 'W3-T3'
    },
    {
        code: 'NR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-011.jpg',
        rarity: 'NR',
        box: 'W3-T3'
    },
    {
        code: 'NR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-012.jpg',
        rarity: 'NR',
        box: 'W3-T3'
    },
    {
        code: 'NR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-013.jpg',
        rarity: 'NR',
        box: 'W4-T3'
    },
    {
        code: 'NR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-014.jpg',
        rarity: 'NR',
        box: 'W4-T3'
    },
    {
        code: 'NR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-015.jpg',
        rarity: 'NR',
        box: 'W4-T3'
    },
    {
        code: 'NR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-016.jpg',
        rarity: 'NR',
        box: 'W4-T3'
    },
    {
        code: 'NR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-017.jpg',
        rarity: 'NR',
        box: 'W4-T3'
    },
    {
        code: 'NR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-018.jpg',
        rarity: 'NR',
        box: 'W4-T3'
    },
    {
        code: 'NR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-019.jpg',
        rarity: 'NR',
        box: 'W5-T3'
    },
    {
        code: 'NR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-020.jpg',
        rarity: 'NR',
        box: 'W5-T3'
    },
    {
        code: 'NR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-021.jpg',
        rarity: 'NR',
        box: 'W5-T3'
    },
    {
        code: 'NR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-022.jpg',
        rarity: 'NR',
        box: 'W5-T3'
    },
    {
        code: 'NR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/NR-023.jpg',
        rarity: 'NR',
        box: 'W5-T3'
    },
    {
        code: 'BP-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-001.jpg',
        rarity: 'BP',
        box: 'W2-T4'
    },
    {
        code: 'BP-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-002.jpg',
        rarity: 'BP',
        box: 'W2-T4'
    },
    {
        code: 'BP-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-003.jpg',
        rarity: 'BP',
        box: 'W2-T4'
    },
    {
        code: 'BP-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-004.jpg',
        rarity: 'BP',
        box: 'W2-T4'
    },
    {
        code: 'BP-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-005.jpg',
        rarity: 'BP',
        box: 'W2-T4'
    },
    {
        code: 'BP-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-006.jpg',
        rarity: 'BP',
        box: 'W2-T4'
    },
    {
        code: 'BP-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-007.jpg',
        rarity: 'BP',
        box: 'W3-T4'
    },
    {
        code: 'BP-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-008.jpg',
        rarity: 'BP',
        box: 'W3-T4'
    },
    {
        code: 'BP-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-009.jpg',
        rarity: 'BP',
        box: 'W3-T4'
    },
    {
        code: 'BP-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-010.jpg',
        rarity: 'BP',
        box: 'W3-T4'
    },
    {
        code: 'BP-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-011.jpg',
        rarity: 'BP',
        box: 'W3-T4'
    },
    {
        code: 'BP-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-012.jpg',
        rarity: 'BP',
        box: 'W3-T4'
    },
    {
        code: 'BP-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-013.jpg',
        rarity: 'BP',
        box: 'YouthScroll'
    },
    {
        code: 'BP-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-014.jpg',
        rarity: 'BP',
        box: 'YouthScroll'
    },
    {
        code: 'BP-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-015.jpg',
        rarity: 'BP',
        box: 'YouthScroll'
    },
    {
        code: 'BP-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-016.jpg',
        rarity: 'BP',
        box: 'YouthScroll'
    },
    {
        code: 'BP-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-017.jpg',
        rarity: 'BP',
        box: 'W4-T4'
    },
    {
        code: 'BP-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-018.jpg',
        rarity: 'BP',
        box: 'W4-T4'
    },
    {
        code: 'BP-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-019.jpg',
        rarity: 'BP',
        box: 'W4-T4'
    },
    {
        code: 'BP-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-020.jpg',
        rarity: 'BP',
        box: 'W4-T4'
    },
    {
        code: 'BP-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-021.jpg',
        rarity: 'BP',
        box: 'W4-T4'
    },
    {
        code: 'BP-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-022.jpg',
        rarity: 'BP',
        box: 'W4-T4'
    },
    {
        code: 'BP-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-023.jpg',
        rarity: 'BP',
        box: 'W5-T4'
    },
    {
        code: 'BP-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-024.jpg',
        rarity: 'BP',
        box: 'W5-T4'
    },
    {
        code: 'BP-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-025.jpg',
        rarity: 'BP',
        box: 'W5-T4'
    },
    {
        code: 'BP-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-026.jpg',
        rarity: 'BP',
        box: 'W5-T4'
    },
    {
        code: 'BP-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BP-027.jpg',
        rarity: 'BP',
        box: 'W5-T4'
    },
    {
        code: 'ZR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-001.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-002.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-003.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-004.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-005.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-006.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-007.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-008.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-009.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-010.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-011.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-012.jpg',
        rarity: 'ZR',
        box: 'W4-T2'
    },
    {
        code: 'ZR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-013.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-014.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-015.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-016.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-017.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-018.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-019.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-020.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-021.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-022.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-023.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-024.jpg',
        rarity: 'ZR',
        box: 'W5-T2'
    },
    {
        code: 'ZR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-025.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-026.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-027.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-028.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-029.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-030.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-031.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-032.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-033.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-034.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-035.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'ZR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/ZR-036.jpg',
        rarity: 'ZR',
        box: 'W6-T2'
    },
    {
        code: 'SE-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-001.jpg',
        rarity: 'SE',
        box: 'W4-T4'
    },
    {
        code: 'SE-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-002.jpg',
        rarity: 'SE',
        box: 'W4-T4'
    },
    {
        code: 'SE-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-003.jpg',
        rarity: 'SE',
        box: 'W4-T4'
    },
    {
        code: 'SE-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-004.jpg',
        rarity: 'SE',
        box: 'W4-T4'
    },
    {
        code: 'SE-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-005.jpg',
        rarity: 'SE',
        box: 'W4-T4'
    },
    {
        code: 'SE-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-006.jpg',
        rarity: 'SE',
        box: 'W4-T4'
    },
    {
        code: 'SE-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-007.jpg',
        rarity: 'SE',
        box: 'W5-T4'
    },
    {
        code: 'SE-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-008.jpg',
        rarity: 'SE',
        box: 'W5-T4'
    },
    {
        code: 'SE-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-009.jpg',
        rarity: 'SE',
        box: 'W5-T4'
    },
    {
        code: 'SE-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-010.jpg',
        rarity: 'SE',
        box: 'W5-T4'
    },
    {
        code: 'SE-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-011.jpg',
        rarity: 'SE',
        box: 'W5-T4'
    },
    {
        code: 'SE-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SE-012.jpg',
        rarity: 'SE',
        box: 'W5-T4'
    },
    {
        code: 'SS-SE-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SE-001.jpg',
        rarity: 'SS-SE',
        box: 'NewYears'
    },
    {
        code: 'SS-SE-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SE-002.jpg',
        rarity: 'SS-SE',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-G01',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G01.jpg',
        rarity: 'SS-SV-G',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SV-G02',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G02.jpg',
        rarity: 'SS-SV-G',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SV-G03',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G03.jpg',
        rarity: 'SS-SV-G',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SV-G04',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G04.jpg',
        rarity: 'SS-SV-G',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SV-G05',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G05.jpg',
        rarity: 'SS-SV-G',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-G06',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G06.jpg',
        rarity: 'SS-SV-G',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-G07',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G07.jpg',
        rarity: 'SS-SV-G',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-G08',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G08.jpg',
        rarity: 'SS-SV-G',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-G09',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G09.jpg',
        rarity: 'SS-SV-G',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-G10',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-G10.jpg',
        rarity: 'SS-SV-G',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-S01',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S01.jpg',
        rarity: 'SS-SV-S',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SV-S02',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S02.jpg',
        rarity: 'SS-SV-S',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SV-S03',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S03.jpg',
        rarity: 'SS-SV-S',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SV-S04',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S04.jpg',
        rarity: 'SS-SV-S',
        box: 'Heaven&Earth'
    },
    {
        code: 'SS-SV-S05',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S05.jpg',
        rarity: 'SS-SV-S',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-S06',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S06.jpg',
        rarity: 'SS-SV-S',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-S07',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S07.jpg',
        rarity: 'SS-SV-S',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-S08',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S08.jpg',
        rarity: 'SS-SV-S',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-S09',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S09.jpg',
        rarity: 'SS-SV-S',
        box: 'NewYears'
    },
    {
        code: 'SS-SV-S10',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SS-SV-S10.jpg',
        rarity: 'SS-SV-S',
        box: 'NewYears'
    },
    {
        code: 'CC-XR-001L5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-001L5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-001PL5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-001PL5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-002L5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-002L5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-002PL5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-002PL5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-003L5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-003L5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-003PL5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-003PL5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-004L5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-004L5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-004PL5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-004PL5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-005L5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-005L5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-005PL5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-005PL5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-006L5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-006L5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-006PL5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-006PL5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-XR-001YL5',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-XR-001YL5.jpg',
        rarity: 'CC-XR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-QR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-QR-001.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'PROMO-CC-QR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PROMO-CC-QR-001.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-QR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-QR-002.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-QR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-QR-003.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-QR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-QR-004.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-QR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-QR-005.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-QR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-QR-006.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-QR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-QR-007.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-QR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-QR-008.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-QR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-QR-009.jpg',
        rarity: 'CC-QR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-001.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-002.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-003.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-004.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-005.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-006.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-007.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-008.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-009.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-010.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-011.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-012.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-013.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-014.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-015.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-016.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-017.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-018.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-019.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'CC-PTR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/CC-PTR-020.jpg',
        rarity: 'CC-PTR',
        box: 'NinjaAge'
    },
    {
        code: 'LR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/LR-001.jpg',
        rarity: 'LR',
        box: 'Blister1'
    },
    {
        code: 'LR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/LR-002.jpg',
        rarity: 'LR',
        box: 'Blister2'
    },
    {
        code: 'LR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/LR-003.jpg',
        rarity: 'LR',
        box: 'Blister3'
    },
    {
        code: 'LR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/LR-004.jpg',
        rarity: 'LR',
        box: 'Blister4'
    },
    {
        code: 'LR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/LR-005.jpg',
        rarity: 'LR',
        box: 'Blister5'
    },
    {
        code: 'LR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/LR-006.jpg',
        rarity: 'LR',
        box: 'Blister6'
    },
    {
        code: 'BR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-001.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-002.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-003.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-004.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-005.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-006.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-007',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-007.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-008.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-009.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-010.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-011.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-012.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-013.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-014.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-015.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'BR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/BR-016.jpg',
        rarity: 'BR',
        box: 'Badge'
    },
    {
        code: 'SCR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SCR-001.jpg',
        rarity: 'SCR',
        box: 'YouthScroll'
    },
    {
        code: 'SCR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/SCR-002.jpg',
        rarity: 'SCR',
        box: 'YouthScroll'
    },
    {
        code: '20th-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/20th-001.jpg',
        rarity: '20th',
        box: 'W4-T4'
    },
    {
        code: 'PR-001',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-001.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-002',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-002.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-003',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-003.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-004',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-004.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-005',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-005.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-006',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-006.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-008',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-008.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-009',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-009.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-010',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-010.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-011',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-011.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-012',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-012.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-013',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-013.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-014',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-014.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-015',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-015.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-016',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-016.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-017',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-017.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-018',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-018.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-019',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-019.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-020',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-020.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-021',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-021.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-022',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-022.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-023',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-023.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-024',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-024.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-025',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-025.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-026',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-026.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-027',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-027.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-028',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-028.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-029',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-029.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-030',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-030.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-031',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-031.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-032',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-032.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-033',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-033.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-034',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-034.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-035',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-035.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-036',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-036.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-037',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-037.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-038',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-038.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-039',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-039.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-040',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-040.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-041',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-041.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-042',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-042.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-043',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-043.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-044',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-044.jpg',
        rarity: 'PR',
        box: 'Promo'
    },
    {
        code: 'PR-045',
        imgSrc: 'https://s3.amazonaws.com/naruto-kayou-cards/cards-image/PR-045.jpg',
        rarity: 'PR',
        box: 'Promo'
    }
];

export const seed = async (knex: Knex) => {
    const [{ count }] = await knex(ETableNames.narutoCards).count<
        [{ count: number }]
    >('* as count');
    if (!Number.isInteger(count) || Number(count) > 0) return;

    const cardsToInsert = cards.map(card => ({
        code: card.code,
        box: card.box,
        imgSrc: card.imgSrc,
        rarity: card.rarity
    }));
    await knex(ETableNames.narutoCards).insert(cardsToInsert);
};
