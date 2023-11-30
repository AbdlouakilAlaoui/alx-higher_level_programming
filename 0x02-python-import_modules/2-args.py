#!/usr/bin/python3
if __name__ == "__main__":
    import sys

    argLen = len(sys.argv)
    if argLen == 0:
        print("0 argument.")
    elif argLen == 1:
        print("1 argument:")
    else:
        print("{} arguments:".format(argLen))
    for i in range(argLen):
        print("{}: {}".format(i + 1, sys.argv[i + 1]))
