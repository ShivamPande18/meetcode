const cppPreCodes = [
    `
        #include<iostream>
        #include<vector>
        using namespace std;


        int sum(int a, int b);

        int main(){

            vector<int> a = {1,2,3,4};
            vector<int> b = {1,2,3,4};

            vector<int> tests = {2,4,6,8};

            for(int i=0;i<a.size();i++){
                int ans = sum(a[i],b[i]);
                int test = tests[i];

                if(ans == test) cout<<"Test case " << i << " passed."<<endl;
                else cout<<"Test case " << i << " failed."<<endl;
            }
            return 0;
        }
            \n\n
    `

    ,

    `
    
    `

]