# sudoku-calculator
一个js写的数独算法
http://blog.93html.com/sudoku-calculator/


数独的规则是，每个格子里的数字在它所在的行、列中不能重复，也就是说要取得这个红色方块的数字，要排除在绿色区域里有的数字 <br>
<img src="http://ww1.sinaimg.cn/large/005X3nNxjw1eph58aj1o2j30ib0i6t9f.jpg" alt="" /><br>
所以这格的候选数字就是1,6,7 <img src="http://ww4.sinaimg.cn/large/005yyi5Jjw1eph595vt76j30kl0i5gme.jpg" alt="" /> <br>
在做题过程中又发现每个九宫格中的数字都是唯一的，所以还要排除目标所在九宫格的数字，进一步排除后剩下1,6 <br>
<img src="http://ww4.sinaimg.cn/large/005yyi5Jjw1eph5c3tlqtj30kl0i50ti.jpg" alt="" /> <br>
然后每一个空白的单元格里都进行一次排除，这样每次都必然有新的数字出现，新的数字又可以成为新的线索，这样重复个几轮以后，直到所有空格被解开。  
