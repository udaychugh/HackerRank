#include <iostream>
#include <iomanip>
#include <limits>

using namespace std;

int main() {
    int i = 4;
    double d = 4.0;
    string s = "HackerRank ";
    
    int x;
    double y;
    string z;
    
    string tmp;

    cin>>x;
    cin>>y;
    getline(cin, z);
    cout<<x+i<<endl;
    cout<<fixed<<setprecision(1)<<y+d<<endl;
    cout<<s<<z<<endl;
 

    return 0;
}