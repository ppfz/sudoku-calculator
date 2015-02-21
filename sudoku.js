(function(window) {

	var Sudoku = function(sdArr) {
		return this.init(sdArr);
	};

	Sudoku.prototype = {
		init: function(sdArr) {

			if (!(sdArr instanceof Array))
				throw '参数错误不是数组';

			this.ok = false;

			this.count(sdArr);

			return this;
		},

		count: function(sdArr) {

			if (this.ok) {
				console.table(sdArr);
				return;
			}

			this.ok = true;

			for (var i = sdArr.length - 1; i >= 0; i--) {
				var cRow = sdArr[i]; //所在行

				for (var j = cRow.length - 1; j >= 0; j--) {
					var cCell = sdArr[i][j]; //所在格子

					if (cCell == 0 || cCell instanceof Array) {
						this.ok = false;

						cCol = this.getCcol(j, sdArr);

						box = this.getBox({
							x: i,
							y: j
						}, sdArr);

						sdArr[i][j] = cCell = this.getCandidate(cRow, cCol, box);
					}
				};
			};

			this.count(sdArr);
		},

		isInArr: function(obj, arr) {
			var result = null;
			for (var i = arr.length - 1; i >= 0; i--) {

				if (obj == arr[i]) {
					result = i;
					break;
				}

			};
			return result;
		},

		//获得候选数字
		getCandidate: function(row, col, box) {
			var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],

				haveSameNum = function(arrA, x) {
					for (var i in arrA) {
						if (arrA[i] == x) return true;
					}
				},
				//合并行列数组
				combine = function(a, b) {
					for (var i in a) {
						if (haveSameNum(b, a[i])) continue;
						b.push(a[i]);
					}
					return b;
				},

				newArr = combine(combine(row, col), box);


			//遍历当前行、列、所在宫的元素，排除相同元素
			for (var k = newArr.length - 1; k >= 0; k--) {

				var idx = this.isInArr(newArr[k], arr);

				if (idx !== null) {
					arr.splice(idx, 1);
				}
			};

			return arr.length > 1 ? arr : arr[0];
		},

		//获得所在列的集合
		getCcol: function(col, arr) {
			var newArr = new Array();

			for (var i = arr.length - 1; i >= 0; i--) {
				newArr.push(arr[i][col]);
			};

			return newArr;
		},

		//获得所在宫格的集合
		getBox: function(target, arr) {
			var newArr = new Array(),

				getMax = function(num) {
					if (num >= 6) {
						return 8;
					} else if (num >= 3) {
						return 5;
					} else {
						return 2;
					}
				},

				getMin = function(num) {
					if (num <= 2) {
						return 0;
					} else if (num <= 5) {
						return 3;
					} else {
						return 6;
					}
				};


			for (var i = getMax(target.x); i >= getMin(target.x); i--) {
				for (var j = getMax(target.y); j >= getMin(target.y); j--) {
					newArr.push(arr[i][j]);
				};
			};

			return newArr;
		},
	};

	window.sudoku = Sudoku;

}(window));