Dash-lib(Dash-library)

This is my library just a collection of some useful functions, currently it only have three functions.

Arrays => that include functions related to arrays.<br>
Objects => that include functions related to Objects.<br>
Numbers => that include functions related to Numbers.<br>

<h2>Arrays</h2> <br>
<h3>Pull Values</h3> <br>
<p>Pull specified values from an array.</p>

pullValues(arr, pullValues, options:optional)

arr: you want to pull values from.
pullValues: values you want to pull.
options(optional): newArr,caseSensitive,sort.<br>
newArr:true => return mutate version of original arr.<br>
caseSensitive:true => return pullValues as argument passed else in lower case.<br>
sort:true => return sorted pullValues array else as argument passed.