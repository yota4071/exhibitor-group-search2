import { Input } from '@nextui-org/input';

const SearchInput = ({ onValueChange }: { onValueChange: (value: string) => void }) => {
  return (
    <>
      <Input
        label='キーワード'
        isClearable
        radius='lg'
        onValueChange={onValueChange}
        classNames={{
          innerWrapper: 'bg-transparent',
          input: [
            'bg-transparent',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-700/50 dark:placeholder:text-white/60',
          ],
          inputWrapper: [
            'shadow-xl',
            'bg-default-200/50',
            'dark:bg-default/60',
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            'hover:bg-default-200/70',
            'dark:hover:bg-default/70',
            'group-data-[focused=true]:bg-default-200/50',
            'dark:group-data-[focused=true]:bg-default/60',
            '!cursor-text',
          ],
          label: 'text-black/50 dark:text-white/90',
        }}
        placeholder='キーワードを入力...'
        startContent={
          <img
            src={'./tag.svg'}
            width={15}
            className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0'
          />
        }
      />
    </>
  );
};

export default SearchInput;
