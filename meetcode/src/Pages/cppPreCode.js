export const cppPreCode = [
    `
#include<iostream>
#include<vector>

using namespace std;

vector<int> twoSum(vector<int>& , int);

int main(){
    int tests=3;

    vector<vector<int>>  inp_nums = {
        {2,7,11,15},
        {3,2,4},
        {3,3}
    };

    vector<int> inp_target = {
        9,
        6,
        6
    };

    vector<vector<int>> ans = {
        {0,1},
        {1,2},
        {0,1}
    };

    for(int i=0;i<tests;i++){
        vector<int> user = twoSum(inp_nums[i],inp_target[i]);

        for(int j=0; j<inp_nums[j].size();j++){
            cout<<inp_nums[i][j]<<" ";
        }
        cout<<endl;

        for(int j=0; j<inp_target.size();j++){
            cout<<inp_target[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans[i].size();j++){
            cout<<ans[i][j] << " ";
        }
        cout<<endl<< "Output: " <<endl;

        for(int j=0;j<user.size();j++){
            cout<<user[j] << " ";
        }

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`
    ,
    `
#include<iostream>
#include<vector>

using namespace std;

bool isPalindrome(int);

int main(){
    int tests=3;

    vector<int>  inp_x = {
        121,
        -121,
        10
    };


    vector<bool> ans = {
        true,
        false,
        false
    };

    for(int i=0;i<tests;i++){
        bool user = isPalindrome(inp_x[i]);

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;
    }

    return 0;
}
    \n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

vector<int> mergeTwoArr(vector<int>  a1, vector<int>  a2);

int main(){
    int tests=3;

    vector<vector<int>>  inp_a1 = {
        {1,2,4},
        {},
        {}
    };

    vector<vector<int>>  inp_a2 = {
        {1,3,4},
        {},
        {0}
    };


    vector<vector<int>> ans = {
        {1,1,2,3,4,4},
        {},
        {0}
    };

    for(int i=0;i<tests;i++){
        vector<int> user = mergeTwoArr(inp_a1[i], inp_a2[i]);

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;
    }

    return 0;
}
    \n\n
`
    ,

    ``

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

int scoreOfString(string);

int main(){
    int tests=2;

    vector<string>  i_s = {
        "hello",
        "zaz"
    };

    vector<int> ans = {
        13,
        50
    };

    for(int i=0;i<tests;i++){
        int user = scoreOfString(i_s[i]);

        for(int j=0; j<i_s.size();j++){
            cout<<i_s[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans.size();j++){
            cout<<ans[j] << " ";
        }
        cout<<endl<< "Output: " <<endl;
        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

int romanToInt(string);

int main(){
    int tests=3;

    vector<string>  i_s = {
        "III",
        "LVIII",
        "MCMXCIV"
    };

    vector<int> ans = {
        3,
        58,
        1994
    };

    for(int i=0;i<tests;i++){
        int user = romanToInt(i_s[i]);

        for(int j=0; j<i_s.size();j++){
            cout<<i_s[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans.size();j++){
            cout<<ans[j] << " ";
        }
        cout<<endl<< "Output: " <<endl;

        cout<<user << " ";


        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

string longestCommonPrefix(vector<string>&);

int main(){
    int tests=2;

    vector<vector<string>>  inp1 = {
        {"flower","flow","flight"},
        {"dog","racecar","car"}
    };

    vector<int> ans = {
        "fl",
        ""
    };

    for(int i=0;i<tests;i++){
        string user = longestCommonPrefix(inp1[i]);

        for(int j=0; j<inp1.size();j++){
            cout<<inp1[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans.size();j++){
            cout<<ans[j] << " ";
        }
        cout<<endl<< "Output: " <<endl;

        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

bool isValid(string);

int main(){
    int tests4;

    vector<string>  inp_x = {
        "()",
        "()[]{},
        "(]",
        "([])"
    };


    vector<bool> ans = {
        true,
        true,
        false,
        true
    };

    for(int i=0;i<tests;i++){
        bool user = isValid(inp_x[i]);

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;
    }

    return 0;
}
    \n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

int removeDuplicates(vector<int>&);

int main(){
    int tests=2;

    vector<vector<int>>  inp1 = {
        {1,1,2},
        {0,0,1,1,1,2,2,3,3,4}
    };

    vector<int> ans = {
        2,
        5
    };

    for(int i=0;i<tests;i++){
        int user = removeDuplicates(inp1[i]);

        for(int j=0; j<inp1.size();j++){
            cout<<inp1[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans.size();j++){
            cout<<ans[j] << " ";
        }
        cout<<endl<< "Output: " <<endl;

        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

int removeElement(vector<int>& , int);

int main(){
    int tests=2;

    vector<vector<int>>  inp_nums = {
        {3,2,2,3},
        {0,1,2,2,3,0,4,2}
    };

    vector<int> inp_target = {
        3,
        2
    };

    vector<int> ans = {
        2,
        5
    };

    for(int i=0;i<tests;i++){
        int user = removeElement(inp_nums[i],inp_target[i]);

        for(int j=0; j<inp_nums[j].size();j++){
            cout<<inp_nums[i][j]<<" ";
        }
        cout<<endl;

        for(int j=0; j<inp_target.size();j++){
            cout<<inp_target[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans[i].size();j++){
            cout<<ans[i][j] << " ";
        }
        cout<<endl<< "Output: " <<endl;

        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

int strStr(string, string);

int main(){
    int tests=2;

    vector<string>  inp1 = {
        "sadbutsad",
        "leetcode"
    };

    vector<string> inp2 = {
        "sad",
        "leeto"
    };

    vector<int> ans = {
        0,
        -1
    };

    for(int i=0;i<tests;i++){
        int user = strStr(inp1[i],inp2[i]);

        for(int j=0; j<inp1[j].size();j++){
            cout<<inp1[i][j]<<" ";
        }
        cout<<endl;

        for(int j=0; j<inp2.size();j++){
            cout<<inp2[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans[i].size();j++){
            cout<<ans[i][j] << " ";
        }
        cout<<endl<< "Output: " <<endl;

        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

int searchInsert(vector<int>&, int);

int main(){
    int tests=3;

    vector<vector<int>>  inp1 = {
        {1,3,5,6},
        {1,3,5,6},
        {1,3,5,6}
    };

    vector<int> inp2 = {
        5,
        2,
        7
    };

    vector<int> ans = {
        2,
        1,
        4
    };

    for(int i=0;i<tests;i++){
        int user = searchInsert(inp1[i],inp2[i]);

        for(int j=0; j<inp1[j].size();j++){
            cout<<inp1[i][j]<<" ";
        }
        cout<<endl;

        for(int j=0; j<inp2.size();j++){
            cout<<inp2[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans[i].size();j++){
            cout<<ans[i][j] << " ";
        }
        cout<<endl<< "Output: " <<endl;

        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

int lengthOfLastWord(string);

int main(){
    int tests=3;

    vector<string>  inp1 = {
        "Hello World",
        "   fly me   to   the moon  ",
        "luffy is still joyboy"
    };



    vector<int> ans = {
        5,
        4,
        6
    };

    for(int i=0;i<tests;i++){
        int user = lengthOfLastWord(inp1[i]);

        for(int j=0; j<inp1[j].size();j++){
            cout<<inp1[i][j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans[i].size();j++){
            cout<<ans[i][j] << " ";
        }
        cout<<endl<< "Output: " <<endl;

        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

vector<int> plusOne(vector<int>&);

int main(){
    int tests=3;

    vector<vector<int>>  inp_a1 = {
        {1,2,3},
        {4,3,2,1},
        {9}
    };


    vector<vector<int>> ans = {
        {1,2,4},
        {4,3,2,2},
        {1,0}
    };

    for(int i=0;i<tests;i++){
        vector<int> user = plusOne(inp_a1[i]);

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;
    }

    return 0;
}
    \n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

string addBinary(string, string);

int main(){
    int tests=2;

    vector<string>  inp1 = {
        "11",
        "1010"
    };

    vector<string> inp2 = {
        "1",
        "1011"
    };

    vector<string> ans = {
        "100",
        "10101"
    };

    for(int i=0;i<tests;i++){
        string user = addBinary(inp1[i],inp2[i]);

        for(int j=0; j<inp1[j].size();j++){
            cout<<inp1[i][j]<<" ";
        }
        cout<<endl;

        for(int j=0; j<inp2.size();j++){
            cout<<inp2[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans[i].size();j++){
            cout<<ans[i][j] << " ";
        }
        cout<<endl<< "Output: " <<endl;

        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>

using namespace std;

int mySqrt(int);

int main(){
    int tests=2;

    vector<int>  i_s = {
        4,
        8
    };

    vector<int> ans = {
        2,
        2
    };

    for(int i=0;i<tests;i++){
        int user = mySqrt(i_s[i]);

        for(int j=0; j<i_s.size();j++){
            cout<<i_s[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans.size();j++){
            cout<<ans[j] << " ";
        }
        cout<<endl<< "Output: " <<endl;
        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>
#include<unordered_map>
#include<map>

using namespace std;

int climbStairs(int);

int main(){
    int tests=2;

    vector<int>  i_s = {
        2,
        3
    };

    vector<int> ans = {
        2,
        3
    };

    for(int i=0;i<tests;i++){
        int user = climbStairs(i_s[i]);

        for(int j=0; j<i_s.size();j++){
            cout<<i_s[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans.size();j++){
            cout<<ans[j] << " ";
        }
        cout<<endl<< "Output: " <<endl;
        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>
#include<unordered_map>
#include<map>

using namespace std;

int removeDuplicates(vector<int>&);

int main(){
    int tests=2;

    vector<vector<int>>  i_s = {
        {1,1,2},
        {0,0,1,1,1,2,2,3,3,4}
    };

    vector<int> ans = {
        2,
        5
    };

    for(int i=0;i<tests;i++){
        int user = removeDuplicates(i_s[i]);

        for(int j=0; j<i_s.size();j++){
            cout<<i_s[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans.size();j++){
            cout<<ans[j] << " ";
        }
        cout<<endl<< "Output: " <<endl;
        cout<<user << " ";

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    `
#include<iostream>
#include<vector>
#include<unordered_map>
#include<map>

using namespace std;

void merge(vector<int>&, int, vector<int>&, int)
int main(){
    int tests=3;

    vector<vector<int>>  inp1 = {
        {1,2,3,0,0,0},
        {1},
        {0}
    };


    vector<int>  inp2 = {
        3,
        1,
        0
    };

    vector<vector<int>>  inp3 = {
        {2,5,6},
        {},
        {1}
    };


    vector<int>  inp4 = {
        3,
        0,
        1    
    };

    vector<vector<int>> ans = {
        {1,2,2,3,5,6},
        {1}
    };

    for(int i=0;i<tests;i++){
        vector<int> user = merge(inp1,inp2,inp3,inp4);

        for(int j=0; j<inp1.size();j++){
            cout<<inp1[j]<<" ";
        }

        cout<<endl;

        for(int j=0; j<inp2.size();j++){
            cout<<inp2[j]<<" ";
        }

        cout<<endl;

        for(int j=0; j<inp3.size();j++){
            cout<<inp3[j]<<" ";
        }

        cout<<endl;

        for(int j=0; j<inp4.size();j++){
            cout<<inp4[j]<<" ";
        }

        cout<<endl;

        cout<< "Expected: " <<endl;
        for(int j=0;j<ans.size();j++){
            cout<<ans[j] << " ";
        }
        cout<<endl<< "Output: " <<endl;
        for(int j=0; j<user.size();j++){
            cout<<user[j]<<" ";
        }

        cout<<endl;

        if ( user == ans[i] ) cout<<"Test case " << i << " passed."<<endl;
        else cout<<"Test case " << i << " failed."<<endl;

        cout<<endl<<endl;
    }

    return 0;
}
\n\n
`

    ,

    ``
]