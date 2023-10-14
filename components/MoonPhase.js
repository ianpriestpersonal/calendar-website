import Link from 'next/link';

export default function MoonPhase ({data}) {
    console.log("data=", data)
        var character;

        switch( data ) {
        case 0: // New moon
            character = "0"
            break;
        case 14: // Full moon
            character = "1"
            break;
        default:
            var base;
            if ( data > 0 && data < 14 ) {
                base = 64;
            }
            else {
                base = 63;
            }
            character = String.fromCharCode(data+base)
        }
        console.log("character=", character)

    return (character)
}
