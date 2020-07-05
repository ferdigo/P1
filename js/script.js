function my_function(n) {
    // Тут нужно написать решение
    if (n <= 1) {
        return n; //чтобы не было пробела перед выводом строки.
    }
    return my_function(n - 1) + " " + n;
}


my_function(3);