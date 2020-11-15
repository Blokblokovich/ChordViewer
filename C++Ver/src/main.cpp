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
        posn = index(name, "b");
    
    cout << posn << endl;
}

string Key::getname()
{
    return name;
}

signed Key::index(string keyname, string arrname)
{
    signed n = sizeof(keysw) / sizeof(keysb[0]);
    signed b = sizeof(keysb) / sizeof(keysw[0]);
    signed i;
    signed len = keyname.length();

    if(arrname.compare(0, 1, "w") == 0)
    {
        for(i = 0; i < n; i++)
        {
            if(keyname.compare(0, keyname.length(), keysw[i]) == 0)
                break;
        }

    }

    if(arrname.compare(0, 1, "b") == 0)
    {
        for(i = 0; i < b; i++)
        {
            string key = keysb[i];
            cout << key << " " << keyname.compare(0, len, key) << endl;
            if(keyname.compare(0, len, key) == 0)
                break;
        }

    }

    if((i < n) || (i < b))
        i = -1;

    return i;
}
