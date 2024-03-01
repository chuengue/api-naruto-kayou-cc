import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';
const rarities = [
    { name: 'R', isPromo: false },
    { name: 'SR', isPromo: false },
    { name: 'SSR', isPromo: false },
    { name: 'TR', isPromo: false },
    { name: 'HR', isPromo: false },
    { name: 'ZR', isPromo: false },
    { name: 'TGR', isPromo: false },
    { name: 'UR', isPromo: false },
    { name: 'OR', isPromo: false },
    { name: 'AR', isPromo: false },
    { name: 'SLR+', isPromo: false },
    { name: 'SLR-', isPromo: false },
    { name: 'SP', isPromo: false },
    { name: 'CP', isPromo: false },
    { name: 'GP', isPromo: false },
    { name: 'MR', isPromo: false },
    { name: 'CR', isPromo: false },
    { name: 'NR', isPromo: false },
    { name: 'BP', isPromo: false },
    { name: 'SE', isPromo: false },
    { name: '20th', isPromo: true },
    { name: 'LR', isPromo: true },
    { name: 'PR', isPromo: true },
    { name: 'BR', isPromo: true },
    { name: 'SCR', isPromo: true },
    { name: 'SS-SSR', isPromo: true },
    { name: 'SS-HR', isPromo: true },
    { name: 'SS-UR', isPromo: true },
    { name: 'SS-OR', isPromo: true },
    { name: 'SS-AR', isPromo: true },
    { name: 'SS-SP', isPromo: true },
    { name: 'SS-SV-S', isPromo: true },
    { name: 'SS-SV-G', isPromo: true },
    { name: 'SS-SE', isPromo: true },
    { name: 'CC-R', isPromo: true },
    { name: 'CC-SR', isPromo: true },
    { name: 'CC-SSR', isPromo: true },
    { name: 'CC-PTR', isPromo: true },
    { name: 'CC-UR', isPromo: true },
    { name: 'CC-SP', isPromo: true },
    { name: 'CC-MR', isPromo: true },
    { name: 'CC-QR', isPromo: true },
    { name: 'CC-XR', isPromo: true }
];
export const seed = async (knex: Knex) => {
    const [{ count }] = await knex(ETableNames.rarities).count<
        [{ count: number }]
    >('* as count');
    if (!Number.isInteger(count) || Number(count) > 0) return;

    const raritiesToInsert = rarities.map(rarity => ({
        name: rarity.name,
        isPromo: rarity.isPromo
    }));
    await knex(ETableNames.rarities).insert(raritiesToInsert);
};
