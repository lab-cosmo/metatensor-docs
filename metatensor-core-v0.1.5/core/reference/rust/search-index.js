var searchIndex = new Map(JSON.parse('[\
["metatensor",{"doc":"Metatensor","t":"KFFFFFFFFFFFFFFFFFFFFNNMNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNENNNNNNNNNNNNNNNNNNNONNNOONNMNNMNMNNNNNNNNNNNCNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNCNNNNNNNNNNNNNNNNNNNOMNNNNNNNNNNNNNNNNNNNNNOONMNNNNOONNNNMNNNNNNNNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOONFSHHOOHHHHHHHH","n":["Array","ArrayRef","ArrayRefMut","EmptyArray","Error","GradientsIter","GradientsMutIter","LabelValue","Labels","LabelsBuilder","LabelsFixedSizeIter","LabelsIter","LazyMetadata","TensorBlock","TensorBlockData","TensorBlockDataMut","TensorBlockRef","TensorBlockRefMut","TensorMap","TensorMapIter","TensorMapIterMut","add","add_gradient","as_any","as_any","as_any","as_any","as_any_mut","as_any_mut","as_any_mut","as_array","as_array","as_array_mut","as_raw","as_raw","as_raw_mut","as_ref","as_ref","as_ref_mut","block","block_by_id","block_matching","block_mut_by_id","blocks","blocks_matching","blocks_mut","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","c_api","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","cmp","code","components","components","components","components","components","components_to_properties","contains","copy","copy","count","create","create","data","data","data","data_mut","deref","drop","drop","drop","empty","eq","eq","eq","errors","finish","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from_raw","from_raw","from_raw","gradient","gradient_list","gradient_mut","gradients","gradients_mut","hash","i32","index","intersection","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into_iter","into_iter","into_iter","into_iter","into_iter","into_iter","into_iter","into_iter","into_iter","into_raw","io","is_empty","isize","iter","iter","iter_fixed_size","iter_mut","keys","keys_to_properties","keys_to_samples","len","len","len","len","len","len","load","load","load_buffer","load_buffer","message","move_samples_from","move_samples_from","names","new","new","new","new","new","new","new","new","next","next","next","next","next","next","partial_cmp","position","properties","properties","properties","properties","properties","reserve","reshape","reshape","samples","samples","samples","samples","samples","save","save","save_buffer","save_buffer","shape","shape","single","size","size","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","swap_axes","swap_axes","to_any","to_any","to_any_mut","to_array","to_array","to_array_mut","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","to_string","try_clone","try_clone","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","union","usize","values","values","values","values","values","values_mut","Error","LAST_RUST_ERROR","check_ptr","check_status","code","message","load","load_buffer","load_labels","load_labels_buffer","save","save_buffer","save_labels","save_labels_buffer"],"q":[[0,"metatensor"],[375,"metatensor::errors"],[381,"metatensor::io"],[389,"core::marker"],[390,"core::convert"],[391,"core::result"],[392,"core::any"],[393,"ndarray::aliases"],[394,"metatensor_sys::c_api"],[395,"alloc::vec"],[396,"core::cmp"],[397,"alloc::boxed"],[398,"core::fmt"],[399,"core::fmt"],[400,"core::hash"],[401,"std::path"],[402,"core::convert"],[403,"metatensor_sys::c_api"],[404,"core::any"],[405,"metatensor_sys::c_api"]],"d":["The Array trait is used by metatensor to manage different …","Reference to a data array in metatensor-core","Mutable reference to a data array in metatensor-core","An implementation of the <code>Array</code> trait without any data.","Error type used in metatensor","Iterator over parameter/<code>TensorBlockRef</code> pairs for all …","Iterator over parameter/<code>TensorBlockRefMut</code> pairs for all …","A single value inside a label.","A set of labels used to carry metadata associated with a …","Builder for <code>Labels</code>","Iterator over entries in a set of <code>Labels</code> as fixed size …","Iterator over <code>Labels</code> entries","Lazily accessed metadata inside a <code>TensorBlock</code>","A single block, containing both values &amp; optionally …","All the basic data in a <code>TensorBlockRef</code> as a struct with …","All the basic data in a <code>TensorBlockRefMut</code> as a struct with …","Reference to a <code>TensorBlock</code>","Mutable reference to a <code>TensorBlock</code>","<code>TensorMap</code> is the main user-facing struct of this library, …","Iterator over key/block pairs in a <code>TensorMap</code>","Iterator over key/block pairs in a <code>TensorMap</code>, with mutable …","Add a single <code>entry</code> to this set of labels.","Add a gradient with respect to <code>parameter</code> to this block.","Get the array as a <code>Any</code> reference","Get the underlying array as an <code>&amp;dyn Any</code> instance.","Get the underlying array as an <code>&amp;dyn Any</code> instance.","","Get the array as a mutable <code>Any</code> reference","Get the underlying array as an <code>&amp;mut dyn Any</code> instance.","","Get the data in this <code>ArrayRef</code> as a <code>ndarray::ArrayD</code>. This …","Get the data in this <code>ArrayRef</code> as a <code>ndarray::ArrayD</code>. This …","Get the data in this <code>ArrayRef</code> as a mutable reference to an …","Get the raw underlying <code>mts_array_t</code>","Get the raw underlying <code>mts_array_t</code>","Get a mutable reference to the raw underlying <code>mts_array_t</code>","Get a non mutable reference to this block","Get a non mutable reference to this block","Get a non mutable reference to this block","Get a reference to the block matching the given selection.","Get a reference to the block at the given <code>index</code> in this …","Get the index of the single block matching the given …","Get a mutable reference to the block at the given <code>index</code> in …","Get a reference to every blocks in this <code>TensorMap</code>","Get the index of blocks matching the given selection.","Get a mutable reference to every blocks in this <code>TensorMap</code>","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Error code from the metatensor-core C API","Get the components for this block","Get the components for this block","Get the components for this block","","","Move the given dimensions from the component labels to the …","Check whether the given <code>label</code> is part of this set of labels","Make a copy of this <code>array</code>","","Get the total number of entries in this set of labels","Create a new array with the same options as the current …","","Get the underlying data storage as a contiguous slice","","Get all the data and metadata inside this <code>TensorBlockRef</code> …","Get all the data and metadata inside this <code>TensorBlockRefMut</code>…","","","","","Create a set of <code>Labels</code> with the given names, containing no …","","","","","Finish building the <code>Labels</code>","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Returns the argument unchanged.","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Create a new set of <code>Labels</code> from a raw <code>mts_labels_t</code>.","Create a new <code>TensorMap</code> from a raw pointer.","Create a new <code>ArrayRef</code> from the given raw <code>mts_array_t</code>","Get the data and metadata for the gradient with respect to …","Get the full list of gradients in this block","Get a mutable reference to the data and metadata for the …","Get an iterator over parameter/<code>TensorBlockRef</code> pairs for …","Get an iterator over parameter/<code>TensorBlockRefMut</code> pairs for …","","Get the integer value of this <code>LabelValue</code> as an i32","","Take the intersection of self with <code>other</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","Extract the underlying raw pointer.","Input/Output facilities for storing <code>crate::TensorMap</code> and …","Check if this set of Labels is empty (contains no entry)","Get the integer value of this <code>LabelValue</code> as an isize","Iterate over the entries in this set of labels","Get an iterator over the keys and associated blocks","Iterate over the entries in this set of labels as …","Get an iterator over the keys and associated blocks, with …","Get the keys defined in this <code>TensorMap</code>","Merge blocks with the same value for selected keys …","Merge blocks with the same value for selected keys …","","","","","","","Load <code>Labels</code> from the file at <code>path</code>","Load a <code>TensorMap</code> from the file at <code>path</code>","Load a <code>TensorMap</code> from an in-memory buffer","Load a <code>TensorMap</code> from an in-memory buffer","Error message associated with the code","Set entries in <code>self</code> taking data from the <code>input</code> array.","","Get the names of the entries/columns in this set of labels","Create a new set of Labels with the given names and values.","Create a new <code>LazyMetadata</code> with the given initialization …","Create a new <code>TensorMap</code> with the given keys and blocks.","Create a new <code>ArrayRefMut</code> from the given raw <code>mts_array_t</code>","Create a new <code>EmptyArray</code> with the given shape.","Create a <code>LabelValue</code> with the given <code>value</code>","Create a new empty <code>LabelsBuilder</code> with the given <code>names</code>","Create a new <code>TensorBlock</code> containing the given data, …","","","","","","","","Get the position (i.e. row index) of the given label in …","Get the properties for this block","Get the properties for this block","Get the properties for this block","","","Reserve space for <code>additional</code> other entries in the labels.","Change the shape of the array to the given <code>shape</code>","","Get the samples for this block","Get the samples for this block","Get the samples for this block","","","Save the given tensor to the file at <code>path</code>","Save the given tensor to the file at <code>path</code>","Save the given tensor to an in-memory buffer","Save the given tensor to an in-memory buffer","Get the shape of the array","","Create a set of <code>Labels</code> containing a single entry, to be …","Get the number of entries/named values in a single label","Get the number of labels in a single value","","","","","","","Swap the axes <code>axis_1</code> and <code>axis_2</code> in this array","","Get a reference to the underlying array as an <code>&amp;dyn Any</code> …","Get the underlying array as an <code>&amp;dyn Any</code> instance, re-using …","Get the underlying array as an <code>&amp;mut dyn Any</code> instance, …","Transform this <code>ArrayRef</code> into a reference to an …","Transform this <code>ArrayRefMut</code> into a reference to an …","Transform this <code>ArrayRefMut</code> into a mutable reference to an …","","","","","","","","","","","","Clone this <code>TensorMap</code>, cloning all the data and metadata …","Clone this block, cloning all the data and metadata …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Take the union of <code>self</code> with <code>other</code>.","Get the integer value of this <code>LabelValue</code> as a usize","Get the array for the values in this block","Get the array for the values in this block","Get the array for the values in this block","","","Get a mutable reference to the values in this block","Error type used in metatensor","Storage for the last error coming from a Rust function","Check a pointer allocated by metatensor-core, returning an …","Check an <code>mts_status_t</code>, returning an error if is it not …","Error code from the metatensor-core C API","Error message associated with the code","Load the serialized tensor map from the given path.","Load a serialized <code>TensorMap</code> from a <code>buffer</code>.","Save labels to the file at the given path.","Load a serialized <code>TensorMap</code> from a <code>buffer</code>.","Save the given tensor to a file.","Save the given <code>tensor</code> to an in-memory <code>buffer</code>.","Save the given Labels to a file.","Save the given <code>labels</code> to an in-memory <code>buffer</code>."],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,7,11,13,14,15,11,14,15,13,14,14,13,14,14,19,7,7,21,21,21,21,21,21,21,9,22,43,44,32,21,47,48,13,14,15,5,25,26,1,20,30,19,31,7,9,22,43,44,32,21,47,48,13,14,15,5,25,26,1,20,30,19,31,7,0,9,22,13,15,5,25,26,1,20,9,22,13,15,5,25,26,1,20,5,9,20,19,7,30,31,21,22,11,15,22,11,15,11,15,20,19,32,22,21,7,22,22,5,5,0,1,9,9,22,32,21,13,14,15,5,5,25,26,1,20,30,19,31,7,9,9,22,43,44,32,21,47,48,13,14,15,5,5,5,5,5,25,26,1,20,30,19,31,7,22,21,13,20,20,19,20,19,5,5,22,22,9,22,43,44,32,21,47,48,13,14,15,5,25,26,1,20,30,19,31,7,22,43,44,21,21,47,48,25,26,21,0,22,5,22,21,22,21,21,21,21,43,44,47,48,25,26,22,21,22,21,9,11,15,22,22,32,21,14,15,5,1,7,43,44,47,48,25,26,5,22,20,19,7,30,31,1,11,15,20,19,7,30,31,22,21,22,21,11,15,22,22,1,43,44,47,48,25,26,11,15,13,14,14,13,14,14,9,22,13,15,5,25,26,1,20,9,5,21,20,9,22,43,44,32,21,47,48,13,14,15,5,25,26,1,20,30,19,31,7,9,22,43,44,32,21,47,48,13,14,15,5,25,26,1,20,30,19,31,7,9,22,43,44,32,21,47,48,13,14,15,5,25,26,1,20,30,19,31,7,22,5,20,19,7,30,31,19,0,0,0,0,9,9,0,0,0,0,0,0,0,0],"f":"`````````````````````{{b{d{c}}}f{h{l{j}}}}{{nA`n}{{Ad{fAb}}}}{AfAh}{AjAh}{AlAh}{AnAh}310{Aj{{Bb{B`}}}}{Al{{Bb{B`}}}}0{AjBd}{AlBd}0{BfBh}{nBh}{nBf}{{BjBl}{{Ad{BhAb}}}}{{BjBn}Bh}{{BjBl}{{Ad{BnAb}}}}{{BjBn}Bf}{Bj{{C`{Bh}}}}{{BjBl}{{Ad{{C`{Bn}}Ab}}}}{Bj{{C`{Bf}}}}{ce{}{}}000000000000000000000000000000000000000`{AbAb}{BlBl}{AjAj}{AnAn}{jj}{CbCb}{CdCd}{bb}{BhBh}{{ce}f{}{}}00000000{{jj}Cf}`{Bh{{C`{Bl}}}}{Bf{{C`{Bl}}}}{n{{C`{Bl}}}}``{{Bj{d{A`}}}{{Ad{BjAb}}}}{{Bl{d{j}}}Ch}{Af{{Cj{Af}}}}{An{{Cj{Af}}}}{BlBn}{{Af{d{Bn}}}{{Cj{Af}}}}{{An{d{Bn}}}{{Cj{Af}}}}{Af{{d{B`}}}}{An{{d{B`}}}}{BhCl}{BfCn}{{{D`{c}}}e{}{}}{Blf}{Bjf}{nf}{{{C`{A`}}}Bl}{{BlBl}Ch}{{jDb}Ch}{{jj}Ch}`{bBl}{{AbDd}{{Ad{fDf}}}}0{{BlDd}Dh}{{{D`{c}}Dd}DhDj}{{BjDd}Dh}{{AjDd}Dh}{{AlDd}Dh}{{AnDd}Dh}{{jDd}Dh}0{{CbDd}Dh}{{CdDd}Dh}{{bDd}Dh}{{BhDd}Dh}{{ClDd}Dh}{{BfDd}Dh}{{CnDd}Dh}{{nDd}Dh}{cc{}}{{{Cj{Ah}}}Ab}1111111111{Dlj}{Bnj}3{Dbj}{Dnj}55555555{E`Bl}{EbBj}{BdAj}{{BhA`}{{Ed{Bh}}}}{Bh{{C`{A`}}}}{{BfA`}{{Ed{Bf}}}}{BhEf}{BfEh}{{jc}fEj}{jDb}{{BlBn}{{d{j}}}}{{BlBl{Ed{{d{El}}}}{Ed{{d{El}}}}}{{Ad{BlAb}}}}{ce{}{}}0000000000000000000{Blc{}}11{Bjc{}}02222{BjEb}`{BlCh}{jDn}{BlCb}{BjEn}{BlCd}{BjF`}{BjBl}{{BjBlCh}{{Ad{BjAb}}}}0{EfBn}{EhBn}{EnBn}{F`Bn}{CbBn}{CdBn}{c{{Ad{BlAb}}}{{Fd{Fb}}}}{c{{Ad{BjAb}}}{{Fd{Fb}}}}{{{d{Ff}}}{{Ad{BlAb}}}}{{{d{Ff}}}{{Ad{BjAb}}}}`{{AfAf{d{Fh}}{Fj{Bn}}}f}{{AnAf{d{Fh}}{Fj{Bn}}}f}{Bl{{C`{A`}}}}{{{Fl{A`}}{d{{Fl{c}}}}}Bl{h{l{j}}}}{Fn{{D`{c}}}{}}{{Bl{C`{n}}}{{Ad{BjAb}}}}{BdAl}{{{C`{Bn}}}An}{Dbj}{{{C`{A`}}}b}{{cBl{d{Bl}}Bl}{{Ad{nAb}}}Af}{Ef{{Ed{c}}}{}}{Eh{{Ed{c}}}{}}{En{{Ed{c}}}{}}{F`{{Ed{c}}}{}}{Cb{{Ed{c}}}{}}{Cd{{Ed{c}}}{}}{{jj}{{Ed{Cf}}}}{{Bl{d{j}}}{{Ed{Bn}}}}{BhBl}{BfBl}{nBl}``{{bBn}f}{{Af{d{Bn}}}f}{{An{d{Bn}}}f}543``{{Blc}{{Ad{fAb}}}{{Fd{Fb}}}}{{Bjc}{{Ad{fAb}}}{{Fd{Fb}}}}{{Bl{C`{Ff}}}{{Ad{fAb}}}}{{Bj{C`{Ff}}}{{Ad{fAb}}}}{Af{{d{Bn}}}}{An{{d{Bn}}}}{{}Bl}{BlBn}{bBn}{Ef{{G`{Bn{Ed{Bn}}}}}}{Eh{{G`{Bn{Ed{Bn}}}}}}{En{{G`{Bn{Ed{Bn}}}}}}{F`{{G`{Bn{Ed{Bn}}}}}}{Cb{{G`{Bn{Ed{Bn}}}}}}{Cd{{G`{Bn{Ed{Bn}}}}}}{{AfBnBn}f}{{AnBnBn}f}{AjAh}{AlAh}0{Aj{{Bb{B`}}}}{Al{{Bb{B`}}}}0{ce{}{}}00000000{cGb{}}0{Bj{{Ad{BjAb}}}}{Bh{{Ad{nAb}}}}{c{{Ad{e}}}{}{}}000000000000000000000000000000000000000{cGd{}}0000000000000000000{{BlBl{Ed{{d{El}}}}{Ed{{d{El}}}}}{{Ad{BlAb}}}}{jBn}{BhAj}{BfAj}{nAj}``{BfAl}``{{}{{Ad{{Gf{c}}Ab}}}{}}{Gh{{Ad{fAb}}}}``{c{{Ad{BjAb}}}{{Fd{Fb}}}}{{{d{Ff}}}{{Ad{BjAb}}}}{c{{Ad{BlAb}}}{{Fd{Fb}}}}{{{d{Ff}}}{{Ad{BlAb}}}}{{cBj}{{Ad{fAb}}}{{Fd{Fb}}}}{{Bj{C`{Ff}}}{{Ad{fAb}}}}{{cBl}{{Ad{fAb}}}{{Fd{Fb}}}}{{Bl{C`{Ff}}}{{Ad{fAb}}}}","c":[],"p":[[5,"LabelsBuilder",0],[1,"slice"],[1,"unit"],[10,"Copy",389],[5,"LabelValue",0],[10,"Into",390],[5,"TensorBlock",0],[1,"str"],[5,"Error",0],[6,"Result",391],[10,"Array",0],[10,"Any",392],[5,"ArrayRef",0],[5,"ArrayRefMut",0],[5,"EmptyArray",0],[1,"f64"],[8,"ArrayD",393],[5,"mts_array_t",394],[5,"TensorBlockRefMut",0],[5,"TensorBlockRef",0],[5,"TensorMap",0],[5,"Labels",0],[1,"usize"],[5,"Vec",395],[5,"LabelsIter",0],[5,"LabelsFixedSizeIter",0],[6,"Ordering",396],[1,"bool"],[5,"Box",397],[5,"TensorBlockData",0],[5,"TensorBlockDataMut",0],[5,"LazyMetadata",0],[1,"i32"],[5,"Formatter",398],[5,"Error",398],[8,"Result",398],[10,"Debug",398],[1,"u32"],[1,"isize"],[5,"mts_labels_t",394],[5,"mts_tensormap_t",394],[6,"Option",399],[5,"GradientsIter",0],[5,"GradientsMutIter",0],[10,"Hasher",400],[1,"i64"],[5,"TensorMapIter",0],[5,"TensorMapIterMut",0],[5,"Path",401],[10,"AsRef",390],[1,"u8"],[5,"mts_sample_mapping_t",394],[5,"Range",402],[1,"array"],[5,"mts_block_t",394],[1,"tuple"],[5,"String",403],[5,"TypeId",392],[5,"NonNull",404],[8,"mts_status_t",394]],"b":[[129,"impl-PartialEq%3Ci32%3E-for-LabelValue"],[130,"impl-PartialEq-for-LabelValue"],[133,"impl-Debug-for-Error"],[134,"impl-Display-for-Error"],[141,"impl-Debug-for-LabelValue"],[142,"impl-Display-for-LabelValue"],[163,"impl-From%3Cu32%3E-for-LabelValue"],[164,"impl-From%3Cusize%3E-for-LabelValue"],[166,"impl-From%3Ci32%3E-for-LabelValue"],[167,"impl-From%3Cisize%3E-for-LabelValue"],[211,"impl-IntoIterator-for-%26TensorMap"],[212,"impl-IntoIterator-for-%26mut+TensorMap"]]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
