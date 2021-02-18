function isUpperCase(str)
{
    return str == str.toUpperCase();
}

class Key
{
    constructor(name)
    {
        var keysb = ['C', 'C/D', 'D', 'D/E', 'E', 'F', 'F/G', 'G', 'G/A', 'A', 'A/H', 'H'];
        var keysw = ['C', 'D', 'E', 'F', 'G', 'A', 'H'];

        this.name = name;
        if(this.name.toUpperCase().indexOf("B") > -1)
        {
            this.posn = 6;
        }
        else
        {
            this.posn = keysw.indexOf(this.name.toUpperCase()[0])
        }

        if(isUpperCase(this.name))
        {
            this.mood = 0;
        }
        else {
            this.mood = 1;
        }

        if(this.name.indexOf("i") > -1)
        {
            this.pos = (keysb.indexOf(this.name.toUpperCase()[0]) + 1) % 12;
        }
        else
        {
            if(this.name.indexOf("s") > -1)
            {
                this.pos = (keysb.indexOf(this.name.toUpperCase()[0]) + 11) % 12;
            }
            else
            {
                if(this.name.toUpperCase().indexOf("B") > -1)
                {
                    this.pos = 10;
                }
                else
                {
                    this.pos = keysb.indexOf(this.name[0].toUpperCase())
                }
            }
        }
    }

    generator(posw, posb)
    {
        var keysb = ['C', 'C/D', 'D', 'D/E', 'E', 'F', 'F/G', 'G', 'G/A', 'A', 'A/H', 'H'];
        var keysw = ['C', 'D', 'E', 'F', 'G', 'A', 'H'];

        var neighborkey = keysw[(this.posn + posw) % 7];
        var nghkeyposw = (this.posn + posw) % 7;
        var nghkeyposb = (this.pos + posb) % 12;

        if((keysb.indexOf(keysw[nghkeyposw]) + 11) % 12 == nghkeyposb)
        {
            if(neighborkey.indexOf("A") > -1){
                neighborkey += "s";
            } else if(neighborkey.indexOf("E") > -1){
                neighborkey += "s";
            } else if(neighborkey.indexOf("H") > -1){
                neighborkey = "B";
            } else{
                neighborkey += "es";
            }
        } else if((keysb.indexOf(keysw[nghkeyposw]) + 1) % 12 == nghkeyposb){
            neighborkey += "is";
        }

        return neighborkey;
    }
}

function getkey()
{
    var key = document.getElementById('key').value;
    var trustedkey = ['C', 'F', 'B', 'Es', 'As', 'Des', 'Cis', 'Ges', 'Fis', 'Ces', 'H', 'E', 'A', 'D', 'G',
                      'a', 'd', 'g', 'c', 'f', 'b', 'ais', 'es', 'dis', 'as', 'gis', 'cis', 'fis', 'h', 'e']

    if(trustedkey.includes(key))
    {
        let chord = new Key(key);
        chord.qdr = chord.generator(3, 5);
        chord.qnt = chord.generator(4, 7);
        chord.pname = chord.generator(5, 9);
        chord.pqdr = chord.generator(1, 2);
        chord.pqnt = chord.generator(2, 4);
        chord.pmname = chord.generator(2, 3);
        chord.pmqdr = chord.generator(5, 8);
        chord.pmqnt = chord.generator(6, 10);

        if(chord.mood == 0)
        {
            showchords(chord.pqdr.toLowerCase(), chord.qdr, chord.qdr.toLowerCase(),
                           chord.pname.toLowerCase(), chord.name, chord.name.toLowerCase(),
                           chord.pqnt.toLowerCase(), chord.qnt, chord.qnt.toLowerCase());
        }
        else
        {
            showchords(chord.pmqdr, chord.qdr.toLowerCase(), chord.qdr,
                           chord.pmname, chord.name, chord.name.charAt(0).toUpperCase() + chord.name.slice(1),
                           chord.pmqnt, chord.qnt.toLowerCase(), chord.qnt);
        }
    } else{
        keyerror();
    }
}

function showchords(a, b, c, d, e, f, g, h, i)
{
    document.getElementById('1').innerHTML = a;
    document.getElementById('2').innerHTML = b;
    document.getElementById('3').innerHTML = c;
    document.getElementById('4').innerHTML = d;
    document.getElementById('5').innerHTML = e;
    document.getElementById('6').innerHTML = f;
    document.getElementById('7').innerHTML = g;
    document.getElementById('8').innerHTML = h;
    document.getElementById('9').innerHTML = i;
}

function keyerror()
{
    document.getElementById('1').innerHTML = '\\';
    document.getElementById('2').innerHTML = '|';
    document.getElementById('3').innerHTML = '/';
    document.getElementById('4').innerHTML = '__';
    document.getElementById('5').innerHTML = 'Not exist';
    document.getElementById('6').innerHTML = '__';
    document.getElementById('7').innerHTML = '/';
    document.getElementById('8').innerHTML = '|';
    document.getElementById('9').innerHTML = '\\';
}
