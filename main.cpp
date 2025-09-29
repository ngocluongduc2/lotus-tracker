#include <bits/stdc++.h>
using namespace std;
int main(){
  vector<int> v = {3,1,4,1,5};
  sort(v.begin(), v.end());
  cout << "sorted:";
  for(int x: v) cout << " " << x;
  cout << "\n";
}
