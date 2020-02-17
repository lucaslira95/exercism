using System;

public static class RnaTranscription
{
    public static string ToRna(string nucleotide)
    {
        char []dna = nucleotide.ToCharArray();
        char []rna = new char[nucleotide.Length];
        for (int i = 0; i < nucleotide.Length; i++)
        {
            switch (dna[i])
            {
                case 'G':
                    rna[i] = 'C';
                    break;

                case 'C':
                    rna[i] = 'G';
                    break;

                case 'T':
                    rna[i] = 'A';
                    break;

                case 'A':
                    rna[i] = 'U';
                    break;
            }
        }
        return new string(rna);
    }
}