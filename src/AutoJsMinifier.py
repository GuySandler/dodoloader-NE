import os
from jsmin import jsmin

def minify_js_files(input_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    totalFiles = 0
    for filename in os.listdir(input_folder):
        if filename.endswith(".js"):
            totalFiles += 1
    iteration = 0
    TotalOriginalSize = 0
    TotalMinifiedSize = 0
    for filename in os.listdir(input_folder):
        if filename.endswith('.js'):
            input_file_path = os.path.join(input_folder, filename)
            output_file_path = os.path.join(output_folder, filename)

            with open(input_file_path, 'r', encoding='utf-8') as input_file:
                js_content = input_file.read()

            original_size = os.path.getsize(input_file_path)
            TotalOriginalSize += original_size
            minified_js = jsmin(js_content)

            with open(output_file_path, 'w', encoding='utf-8') as output_file:
                output_file.write(minified_js)

            minified_size = os.path.getsize(output_file_path)
            TotalMinifiedSize += minified_size

            iteration += 1
            print(f"Minified {filename} and saved to {output_file_path} | {original_size/1000}Kb -> {minified_size/1000}Kb, saved ≈{round((original_size/1000)-(minified_size/1000))}Kb  | {iteration} / {totalFiles} | ({round(iteration/totalFiles)*100}%)")

    print(f"done | {iteration} / {totalFiles} | {TotalOriginalSize/1000}Kb -> {TotalMinifiedSize/1000}Kb, saved ≈{round((TotalOriginalSize/1000)-(TotalMinifiedSize/1000))}Kb")

if __name__ == "__main__":
    input_folder = './maps'
    output_folder = './minifiedMaps'

    minify_js_files(input_folder, output_folder)
