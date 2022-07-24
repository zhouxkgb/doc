


/**
 * 快速排序 - 分治法
 * best case   O(nlogN)
 * worst case  O(n^2)
 * core 每次抓准自己的位置，小的在左边，大的在右边
 * @param {Array} arr 
 */
function quickSort(arr) {
    // 
    function partition(arr, left, right) {
        let pivot = left + 1; // 分水岭
        for (let i = pivot; i <= right; i++) {
            if (arr[i] < arr[left]) {
                [arr[pivot], arr[i]] = [arr[i], arr[pivot]]
                pivot++
            }
        }
        // 跟分水岭换个位置
        pivot--
        [arr[left], arr[pivot]] = [arr[pivot], arr[left]]
        return pivot
    }


    function main(arr, left, right) {
        if (left < right) {
            let pivot = partition(arr, left, right)
            main(left, pivot - 1)
            main(pivot + 1, right)
        }
    }

    main(arr, 0, arr.length - 1)
    console.log(arr)
}

const test1 = [7, 5, 3, 9, 2, 8]
quickSort(test1)
