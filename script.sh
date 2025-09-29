#!/usr/bin/env bash
set -e
nums=(5 2 9 1 6)
printf "nums:"; for n in "${nums[@]}"; do printf " %s" "$n"; done; echo
IFS=$'\n' sorted=($(printf "%s\n" "${nums[@]}" | sort -n))
echo "min=${sorted[0]} max=${sorted[-1]}"
