#include <algorithm>
#include <string>
#include "reverse_string.h"

namespace reverse_string {
    std::string reverse_string(std::string original){
        reverse(original.begin(), original.end());
        return original;
    }
}  // namespace reverse_string
