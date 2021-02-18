import eel
eel.init('web')


class Key:
    keysb = ('C', 'C/D', 'D', 'D/E', 'E', 'F', 'F/G', 'G', 'G/A', 'A', 'A/H', 'H')
    keysw = ('C', 'D', 'E', 'F', 'G', 'A', 'H')

    def __init__(self, name):
        self.name = name
        if 'B' in self.name.upper():
            self.posn = 6
        else:
            self.posn = Key.keysw.index(self.name[0].upper())

        if self.name[0].isupper():
            self.mood = 0
        else:
            self.mood = 1

        if 'i' in self.name:
            self.pos = (Key.keysb.index(self.name[0].upper()) + 1) % 12
        else:
            if 's' in self.name:
                self.pos = (Key.keysb.index(self.name[0].upper()) + 11) % 12
            else:
                if 'B' in self.name.upper():
                    self.pos = Key.keysb.index('H') - 1
                else:
                    self.pos = Key.keysb.index(self.name[0].upper())

    def generator(self, posw, posb):
        neighborkey = Key.keysw[(self.posn + posw) % 7]
        nghkeyposw = (self.posn + posw) % 7
        nghkeyposb = (self.pos + posb) % 12

        if (Key.keysb.index(Key.keysw[nghkeyposw]) + 11) % 12 == nghkeyposb:
            if 'A' in neighborkey:
                neighborkey += 's'
            elif 'E' in neighborkey:
                neighborkey += 's'
            elif 'H' in neighborkey:
                neighborkey = 'B'
            else:
                neighborkey += 'es'
        elif (Key.keysb.index(Key.keysw[nghkeyposw]) + 1) % 12 == nghkeyposb:
            neighborkey += 'is'

        return neighborkey


@eel.expose
def main(key):
    trustedkey = ['C', 'F', 'B', 'Es', 'As', 'Des', 'Cis', 'Ges', 'Fis', 'Ces', 'H', 'E', 'A', 'D', 'G',
                  'a', 'd', 'g', 'c', 'f', 'b', 'ais', 'es', 'dis', 'as', 'gis', 'cis', 'fis', 'h', 'e']
    if key in trustedkey:
        chord = Key(key)
        chord.qdr = chord.generator(3, 5)
        chord.qnt = chord.generator(4, 7)
        chord.pname = chord.generator(5, 9)
        chord.pqdr = chord.generator(1, 2)
        chord.pqnt = chord.generator(2, 4)
        chord.pmname = chord.generator(2, 3)
        chord.pmqdr = chord.generator(5, 8)
        chord.pmqnt = chord.generator(6, 10)

        if chord.mood == 0:
            eel.showchords(chord.pqdr.lower(), chord.qdr, chord.qdr.lower(),
                           chord.pname.lower(), chord.name, chord.name.lower(),
                           chord.pqnt.lower(), chord.qnt, chord.qnt.lower())
        else:
            eel.showchords(chord.pmqdr, chord.qdr.lower(), chord.qdr,
                           chord.pmname, chord.name, chord.name.title(),
                           chord.pmqnt, chord.qnt.lower(), chord.qnt)

    else:
        eel.keyerror()


eel.start('main.html', mode='user default', size=(405, 720))

"""version 1.0 (beta test)"""
