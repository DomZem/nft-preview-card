import clockIcon from '../../../assets/icons/icon-clock.svg';
import ethereumIcon from '../../../assets/icons/icon-ethereum.svg';
import avatarImage from '../../../assets/images/image-avatar.png';
import equilibriumImage from '../../../assets/images/image-equilibrium.jpg';
import Divider from '../../atoms/Divider/Divider';

const NftCard = () => {
	return (
		<article className='flex w-full max-w-xs flex-col gap-y-4 rounded-2xl bg-cardBG p-6'>
			<div className='view-overlay'>
				<img src={equilibriumImage} alt='equilibrium logo' />
			</div>

			<h2 className='cursor-pointer text-2xl font-bold text-white duration-200 hover:text-cyan'> Equilibrium #3429</h2>
			<p>Our Equilibrium collection promotes balance and calm.</p>

			<section className='flex items-center justify-between'>
				<div className='flex items-center gap-x-2'>
					<img src={ethereumIcon} alt='ethereum icon' />
					<p className='font-bold text-cyan'>0.041 ETH</p>
				</div>
				<div className='flex items-center gap-x-2'>
					<img src={clockIcon} alt='clock icon' />
					<p>3 days left</p>
				</div>
			</section>

			<Divider />

			<footer className='flex items-center justify-start gap-x-4'>
				<img className='w-[32px] rounded-full border-2' src={avatarImage} alt='avatar' />
				<p>
					Creation of
					<span className='ml-1 cursor-pointer text-white duration-200 hover:text-cyan'>Jules Wyvern</span>
				</p>
			</footer>
		</article>
	);
};

export default NftCard;
