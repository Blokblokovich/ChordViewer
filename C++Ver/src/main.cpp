#include <iostream>
using namespace std;

class Key
{
    string keysb[12] = {"C", "C/D", "D", "D/E", "E", "F", "F/G", "G", "G/A", "A", "A/H", "H"};
    string keysw[7] = {"C", "D", "E", "F", "G", "A", "H"};

    string name;
    signed posn;
    signed pos;
    signed mood;

    public:
        Key(string x);
        string getname();
        signed index(string x, string y);
};


// main function
signed main()
{
    string key;

    cout << "Enter the key name: ";
    cin >> key;
    
    Key inkey(key);

    cout << inkey.getname() << endl;

    return 0;
}


// construct and methods of class Key
Key::Key(string x)
{
    // __init__
    name = x;
    if(name.compare(0, 1, "B") == 0)
        posn = 6;
    else
        posn = index(x, "w");
    
    cout << posn << endl;
    
}

string Key::getname()
{
    return name;
}

signed Key::index(string x, string y)
{
    signed n = sizeof(keysb) / sizeof(keysb[0]);
    signed b = sizeof(keysw) / sizeof(keysw[0]);
    signed i;

    if(y.compare(0, 1, "w") == 0)
    {
        for(i; i < n; i++)
        {
            if(keysw[i] == x)
            {
                break;
            }
        }

        i = (i < n)? i: -1;
    }

    if(y.compare(0, 1, "b") == 0)
    {
        for(i; i < b; i++)
        {
            if(keysb[i] == x)
            {
                break;
            }
        }
        
        i = (i < n)? i: -1;
    }

    return i;
}
