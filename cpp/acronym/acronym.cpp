#include<string>
#include "acronym.h"

namespace acronym {
    std::string acronym(std::string phrase){
        std::string acronym;
        acronym += toupper(phrase[0]);

        for(int i = 0; i != (int)phrase.length(); i++){
            if(phrase[i] == ' ' || phrase[i] == '-')
                acronym += toupper(phrase[i + 1]);
        }
        return acronym;
    }
}  // namespace acronym
