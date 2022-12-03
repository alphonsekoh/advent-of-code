"""
--- Day 3: Rucksack Reorganization ---
One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
The fourth rucksack's compartments only share item type v.
The fifth rucksack's compartments only share item type t.
The sixth rucksack's compartments only share item type s.
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

"""
import os 

def read_input() -> list:
	"""
	Read the input file and return a list of characters.
	"""
	input_file = os.path.join(os.path.dirname(__file__), 'input.txt')
	with open(input_file, 'r') as f:
		return f.read().strip().split('\n')

def rucksack_sort() -> list:
	"""
	Find the character that appear in both compartments of each rucksack and appends them to a list
	"""
	apu = read_input()
	rucksack_list = []
	for i in range(len(apu)):
		compartment_size = int(len(apu[i]) / 2)
		first_compartment = apu[i][0:compartment_size]
		second_compartment = apu[i][compartment_size:len(apu[i])]
		for j in first_compartment:
			if j in second_compartment:
				rucksack_list.append(j)
				break
	return rucksack_list

def sum_priorities() -> int:
	"""
	Sum the priorities of the characters that appear in both compartments of each rucksack.
	"""
	rucksack_list = rucksack_sort()
	priorities = []
	for i in rucksack_list:
		if i.islower():
			priorities.append(ord(i) - ord("a") + 1)
		else:
			priorities.append(ord(i) - ord("A") + 27)
	print(priorities)
	return sum(priorities)

if __name__ == '__main__':
	print(rucksack_sort())
	print(f"Part 1 Priority sum: {sum_priorities()}")