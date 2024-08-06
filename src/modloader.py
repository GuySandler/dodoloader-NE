import os
import subprocess
import sys

# godmode in update.js
answer = input("Do you want to download mods?\n(if yes, clear all lines above the instructed line in assets/index.js)\n(y/n): ")
if answer.lower() == "y":
    def eraseLastModded():
        with open("./assets/index.js", 'r') as file:
            lines = file.readlines()
            try:
                index = lines.index("// DO NOT DELETE clear all lines above this one DO NOT DELETE\n")
            except ValueError:
                print(f"Marker not found, did you delete it even though I said not to?.")
                return
        with open("./assets/index.js", 'w') as file:
            file.writelines(lines[index:])
    eraseLastModded()

    # run in reverse order (3 2 1)
    def prepend_line(file_name, line):
        try:
            dummy_file = file_name + '.bak'
            with open(file_name, 'r') as read_obj, open(dummy_file, 'w') as write_obj:
                print(read_obj)
                print(write_obj)
                write_obj.write(str(line) + str("\n"))
                for line in read_obj:
                    write_obj.write(line)
            os.remove(file_name)
            os.rename(dummy_file, file_name)
        except Exception as e:
            print(f"Error: {e}")
            os.remove(dummy_file)
            sys.exit("Something went wrong")

    # .icedodo compiler
    with open("./modloader.icedodo", 'r') as file:
        compiled = ""
        compiledGame = ""
        Addcup = []
        AddMapTocupPre = []
        AddMapTocup = []
        Addskin = []
        content = file.readlines()
        for i in content:
            # function detection
            if i[:5] == "const": compiled = compiled + i
            elif i[:4] == "+cup": Addcup.append(i[4:].strip())
            elif i[:4] == "+map": AddMapTocupPre.append(i[4:].strip())
            elif i[:5] == "+skin": Addskin.append(i[5:].strip())
            else: pass
        if len(Addcup) != 0:
            compiled = compiled + "\n" + "const Addcup = [" + ", ".join(Addcup) + "]\n" #add cup
        if len(AddMapTocupPre) != 0:
            for i in AddMapTocupPre:
                AddMapTocup.append(i.replace("'", ""))
            compiled = compiled + "\n" + "const AddMapTocup = "+ str(AddMapTocup).replace("'", "") +"\n" #add map
        if len(Addskin) != 0:
            compiled = compiled + "\n" + "const Addskin = "+ str(Addskin) +"\n" #add map

        # print(compiled)

    # load mods:
    prepend_line("./assets/index.js", "\n")
    prepend_line("./assets/index.js", compiled)
    prepend_line("./assets/index.js", "//modloader auto generated")

    prepend_line("./assets/Vsingleplayer.js", "\n")
    prepend_line("./Vsingleplayer/index.js", compiled)
    prepend_line("./Vsingleplayer/index.js", "//modloader auto generated")
if answer.lower() == "n" or answer.lower() == "y":
    # run the game
    port = 8000
    try:
        subprocess.run(['python3', '-m', 'http.server', str(port)], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
    print("in a browser, go to: 0.0.0.0:8000, control+c to stop server")
    pass

if answer.lower() != "y" and answer.lower() != "n":
    sys.exit("Invalid input")