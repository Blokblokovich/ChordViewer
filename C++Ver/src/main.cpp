#include <iostream>
using namespace std;

class Key
{
    string keysb[12] = {"C", "C/D", "D", "D/E", "E", "F", "F/G", "G", "G/A", "A", "A/H", "H"};
    string keysw[7] = {"C", "D", "E", "F", "G", "A", "H"};
    signed posn;
    signed pos;

    public:
        string name;
        signed mood;
        Key(string x)
        {
            name = x;
            if(name.compare(0, 1, "B"));
        }
};


// main function
signed main()
{
    return 0;
}
