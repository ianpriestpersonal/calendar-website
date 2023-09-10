
export default function MoonYear({data, rune}) {

    const baseYear = data.year;
    const baseMagic = (baseYear % 19)+1;
    const dist = 19-baseMagic;
    const runeMagic = rune.magicNumber;

     const adjuster = (runeMagic<baseMagic ? dist+runeMagic : runeMagic-baseMagic);
     const year = baseYear + adjuster;
    return "" + year

}