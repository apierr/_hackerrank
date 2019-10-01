# Task
# The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below.

# Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. The implementation for the divisorSum(n) method must return the sum of all divisors of n.
# Refereces: https://www.hackerrank.com/challenges/30-interfaces/problem


class AdvancedArithmetic(object):
    def divisorSum(n):
        raise NotImplementedError


class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        import math
        divs = [1]
        for i in range(2, int(math.sqrt(n))+1):
            if n % i == 0:
                divs.extend([i, n/i])
        divs.extend([n])
        return int(sum(list(set(divs))))


n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)
